import React, { Component } from 'react';
import fb from '../assets/img/fb.png';
import messages from '../data/messages';

const apiLink = 'https://senseus-api.herokuapp.com';

export default class PetitionAction extends Component {
    state = {
        userInput: {
            firstName: '',
            lastName: '',
            email: '',
        },
        status: 'waitingForUser',
    };

    handleChange = e => {
        this.setState({
            userInput: {
                ...this.state.userInput,
                [e.target.name]: e.target.value,
            },
        });
    };

    throwErrors = errors => {
        //the result of framework-specific methods, localization, and laziness
        this.props.toggleModal(
            false,
            messages[this.props.language].errors[errors[Object.keys(errors)[0]][0]],
            10000
        );
    };

    handleSubmit = () => {
        var data = new FormData();
        data.append('firstName', this.state.userInput.firstName);
        data.append('lastName', this.state.userInput.lastName);
        data.append('email', this.state.userInput.email);

        fetch(apiLink + '/api/sign/email', {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    if (result.status === 'error') {
                        this.throwErrors(result.errors);
                    } else {
                        this.props.toggleModal(true, messages[this.props.language].success, 10000);
                    }
                },
                error => {
                    console.log(error);
                }
            );
    };

    render() {
        return (
            <div className="row petition-action">
                <div className="col s12 l6">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
                <div className="col s12 l6">
                    <div className="white-wrapper petition-form">
                        <a className="action-btn fb" href={apiLink + '/facebook/redirect'}>
                            <img src={fb} alt="facebook" />
                            {this.props.buttonActionFb}
                        </a>
                        <p>{this.props.choice}</p>
                        <hr />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="firstName"
                            value={this.state.userInput.firstName}
                            placeholder={this.props.namePlaceholder}
                        />
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="lastName"
                            value={this.state.userInput.lastName}
                            placeholder={this.props.lastnamePlaceholder}
                        />
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            value={this.state.userInput.email}
                            placeholder={this.props.emailPlaceholder}
                        />
                        <button className="action-btn" onClick={this.handleSubmit} href="#">
                            {this.props.buttonAction}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
