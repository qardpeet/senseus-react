import React, { Component } from 'react';
import progressBack from '../assets/img/progress-back.png';
import progressFront from '../assets/img/progress-front.png';

export default class ProgressBar extends Component {
    state = {
        windowWidth: 0,
    };

    handleResize = windowWidth => {
        this.setState({
            windowWidth: windowWidth,
        });
    };

    componentDidMount() {
        this.handleResize(window.innerWidth);
        window.addEventListener('resize', e => this.handleResize(e.target.window.innerWidth));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className="progress-bar">
                <div className="progress-bar-front" style={{ width: this.props.progress }}>
                    <img
                        style={{ width: this.state.windowWidth }}
                        src={progressFront}
                        alt="progress-bar"
                    />
                </div>
                <div className="progress-bar-back">
                    <img
                        style={{ width: this.state.windowWidth }}
                        src={progressBack}
                        alt="progress-bar"
                    />
                </div>
            </div>
        );
    }
}
