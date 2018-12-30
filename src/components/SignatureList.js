import React, { Component } from 'react';
import SignatureTable from './SignatureTable';

export default class SignatureList extends Component {
    state = {
        count: 5,
        loadMore: true,
    };

    handleLoad = () => {
        this.setState({
            count: this.props.signatures.length,
            loadMore: false,
        });
    };

    componentDidUpdate() {
        if (this.props.signatures.length < this.state.count && this.props.signatures.length !== 0) {
            this.setState({
                count: this.props.signatures.length,
                loadMore: false,
            });
        }
    }

    render() {
        if (this.props.signatures.length < 1) {
            return null;
        }

        return (
            <div className="white-wrapper signature-list">
                <h5>{this.props.title}</h5>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>{this.props.avatar}</p>
                            </th>
                            <th>
                                <p>{this.props.name}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <SignatureTable
                            signatures={this.props.signatures.slice(0, this.state.count)}
                        />
                    </tbody>
                </table>
                {this.state.loadMore ? (
                    <p className="load-more" onClick={this.handleLoad}>
                        {this.props.loadMore}
                    </p>
                ) : (
                    false
                )}
            </div>
        );
    }
}
