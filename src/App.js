import React, { Component } from 'react';
import Home from './pages/Home';
import Notification from './components/Notification';


export default class App extends Component {
    state = {
        language: 'geo',
        modal: {
            isActive: false,
            status: false,
            message: '',
        },
    };

    toggleModal = (status, message, timeout) => {
        this.setState({
            modal: {
                isActive: true,
                status: status,
                message: message,
            },
        });

        setTimeout(() => {
            this.setState({
                modal: {
                    ...this.state.modal,
                    isActive: false,
                },
            });
        }, timeout);
    };

    componentDidMount() {
        if (localStorage.senseusLanguage !== 'geo' && localStorage.senseusLanguage !== 'en') {
            localStorage.setItem('senseusLanguage', 'geo');
        }
        this.setState({
            language: localStorage.senseusLanguage,
        });
    }

    handleLanguage = lang => {
        localStorage.setItem('senseusLanguage', lang);
        this.setState({
            language: localStorage.senseusLanguage,
        });
    };

    render() {
        return (
            <div className={this.state.language}>
                <Notification
                    isActive={this.state.modal.isActive}
                    status={this.state.modal.status}
                    message={this.state.modal.message}
                />
                <Home handleLanguage={this.handleLanguage} toggleModal={this.toggleModal} language={this.state.language} />
            </div>
        );
    }
}
