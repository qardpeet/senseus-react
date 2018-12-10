import React, { Component } from 'react';
import Home from './pages/Home';

export default class App extends Component {
    state = {
        language: 'geo',
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
                <Home handleLanguage={this.handleLanguage} language={this.state.language} />
            </div>
        );
    }
}
