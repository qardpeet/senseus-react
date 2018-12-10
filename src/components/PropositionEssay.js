import React from 'react';
import pathIMG from '../assets/img/path.png';

const PropositionEssay = ({ title, content }) => {
    const paragraphArray = content.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
    });

    return (
        <div className="white-wrapper proposition-essay">
            <h5>{title}</h5>
            {paragraphArray}
            <div className="background-path-wrapper">
                <img className="background-path" src={pathIMG} alt="path" />
            </div>
        </div>
    );
};

export default PropositionEssay;
