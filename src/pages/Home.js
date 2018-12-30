import React, { Component } from 'react';
import LanguageSelectionHeader from '../components/LanguageSelectionHeader';
import ProgressBar from '../components/ProgressBar';
import PetitionAction from '../components/PetitionAction';
import BulletPoint from '../components/BulletPoint';
import PropositionEssay from '../components/PropositionEssay';
import SignatureList from '../components/SignatureList';

import havingFunIMG from '../assets/img/having-fun.png';
import codingIMG from '../assets/img/coding.png';
import makingArtIMG from '../assets/img/making-art.png';
import messages from '../data/messages';

import axios from 'axios';

const apiLink = 'https://senseus-api.herokuapp.com';

export default class Home extends Component {
    state = {
        signatures: [],
        signatureCount: 0,
        goal: 5000,
        progress: 0,
    };

    componentDidMount() {
        axios
            .get(`${apiLink}/api/status`)
            .then(res => {
                this.setState({
                    signatures: res.data.data.signatures,
                    signatureCount: res.data.data.signatureCount,
                });
                this.calculateProgress(res.data.data.signatureCount);
            })
            .catch(e => {
                console.error(e);
            });
    }

    calculateProgress = signatureCount => {
        const progress = Math.round((signatureCount / this.state.goal) * 100);
        this.setState({
            progress: progress,
        });
    };

    render() {
        return (
            <>
                <LanguageSelectionHeader handleLanguage={this.props.handleLanguage} />
                <ProgressBar
                    progress={`${this.state.progress}%`}
                    signatureCount={this.state.signatureCount}
                    goalCount={this.state.goal}
                    signature={messages[this.props.language].signature}
                    goal={messages[this.props.language].goal}
                />
                <div className="container">
                    <PetitionAction
                        toggleModal={this.props.toggleModal}
                        title={messages[this.props.language].petitionAction.title}
                        description={messages[this.props.language].petitionAction.description}
                        buttonAction={messages[this.props.language].petitionAction.buttonAction}
                        buttonActionFb={messages[this.props.language].petitionAction.buttonActionFb}
                        namePlaceholder={
                            messages[this.props.language].petitionAction.namePlaceholder
                        }
                        lastnamePlaceholder={
                            messages[this.props.language].petitionAction.lastnamePlaceholder
                        }
                        emailPlaceholder={
                            messages[this.props.language].petitionAction.emailPlaceholder
                        }
                        choice={messages[this.props.language].petitionAction.choice}
                        language={this.props.language}
                    />
                    <div className="bulletpoint">
                        <BulletPoint
                            imgSrc={havingFunIMG}
                            description={messages[this.props.language].bulletPoint[0]}
                        />
                        <BulletPoint
                            imgSrc={codingIMG}
                            description={messages[this.props.language].bulletPoint[1]}
                        />
                        <BulletPoint
                            imgSrc={makingArtIMG}
                            description={messages[this.props.language].bulletPoint[2]}
                        />
                    </div>
                    <PropositionEssay
                        title={messages[this.props.language].propositionEssay.title}
                        content={messages[this.props.language].propositionEssay.content}
                    />
                    <SignatureList
                        title={messages[this.props.language].signatureList.title}
                        avatar={messages[this.props.language].signatureList.avatar}
                        name={messages[this.props.language].signatureList.name}
                        loadMore={messages[this.props.language].signatureList.loadMore}
                        signatures={this.state.signatures}
                    />
                </div>
            </>
        );
    }
}
