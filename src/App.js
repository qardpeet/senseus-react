import React, { Component } from 'react';
import Home from './pages/Home';
import Notification from './components/Notification';
import messages from './data/messages';
import 'url-search-params-polyfill';

export default class App extends Component {
    state = {
        language: 'geo',
        modal: {
            isActive: false,
            status: false,
            message: '',
        },
        emailVerified: '',
        errorCode: '',
        facebookVerified: '',
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
        const params = new URLSearchParams(window.location.search);
        let language = '';
        if(localStorage){
            language = localStorage.senseusLanguage;
        } else { 
            language = 'geo';
        }

        if (language !== 'geo' && language !== 'en') {
            localStorage.setItem('senseusLanguage', 'geo');
            language = 'geo';
        }
        this.setState({
            language: language,
        });

        const verified = params.get('verified');
        const errorCode = params.get('errorCode');

        if (verified) {
            this.toggleModal(true, messages[language].verified, 10000);
        }

        if (errorCode) {
            this.toggleModal(false, messages[language].errors[errorCode], 10000);
        }
    }

    handleLanguage = lang => {
        if(localStorage){
            localStorage.setItem('senseusLanguage', lang);
        }
        this.setState({
            language: lang,
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
                <Home
                    handleLanguage={this.handleLanguage}
                    toggleModal={this.toggleModal}
                    language={this.state.language}
                />
            </div>
        );
    }
}
