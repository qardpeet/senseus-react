import React from 'react';

const BulletPoint = ({ imgSrc, description }) => {
    return (
        <div className="row bulletpoint-list">
            <div className="col s12 m3">
                <img src={imgSrc} alt="illustration" />
            </div>
            <div className="col s12 m8 offset-m1">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BulletPoint;
