import React, { Component } from 'react';
import progressBack from '../assets/img/progress-back.png';
import progressFront from '../assets/img/progress-front.png';

export default class ProgressBar extends Component {
    state = {
        windowWidth: 0,
        progress: '0%',
    };

    handleResize = () => {
        const documentWidth = document.documentElement.clientWidth;
        this.setState({
            windowWidth: documentWidth,
        });
    };

    componentDidMount() {
        this.handleResize();
        setTimeout(() => {
            this.setState({
                progress: this.props.progress,
            });
        });
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <div className="progress-bar">
                <div className="progress-bar-front" style={{ width: this.state.progress }}>
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
