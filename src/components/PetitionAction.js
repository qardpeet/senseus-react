import React, { Component } from 'react';
import fb from '../assets/img/fb.png';

export default class PetitionAction extends Component {
    render() {
        return (
            <div className="row petition-action">
                <div className="col s12 l6">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
                <div className="col s12 l6">
                    <div className="white-wrapper petition-form">
                        <button className="action-btn fb">
                            <img src={fb} alt="facebook" />
                            {this.props.buttonActionFb}
                        </button>
                        <p>{this.props.choice}</p>
                        <hr />
                        <form action="">
                            <input type="text" placeholder={this.props.namePlaceholder} />
                            <input type="text" placeholder={this.props.lastnamePlaceholder} />
                            <input type="email" placeholder={this.props.emailPlaceholder} />
                            <button className="action-btn">{this.props.buttonAction}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
