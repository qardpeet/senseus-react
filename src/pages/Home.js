import React, { Component } from 'react';
import LanguageSelectionHeader from '../components/LanguageSelectionHeader';
import ProgressBar from '../components/ProgressBar';
import PetitionAction from '../components/PetitionAction';
import BulletPoint from '../components/BulletPoint';
import PropositionEssay from '../components/PropositionEssay';

import havingFunIMG from '../assets/img/having-fun.png';
import codingIMG from '../assets/img/coding.png';
import makingArtIMG from '../assets/img/making-art.png';
import messages from '../data/messages';

export default class Home extends Component {
    render() {
        return (
            <>
                <LanguageSelectionHeader handleLanguage={this.props.handleLanguage} />
                <ProgressBar progress="60%" />
                <div className="container">
                    <PetitionAction
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
                </div>
            </>
        );
    }
}
