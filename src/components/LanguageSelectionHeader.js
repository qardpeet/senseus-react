import React from 'react';

const LanguageSelectionHeader = ({ handleLanguage }) => {
    return (
        <div className="language-selection">
            <ul>
                <li>
                    <h6
                        style={{ cursor: 'pointer', fontFamily: 'BPGweb' }}
                        onClick={() => handleLanguage('en')}
                    >
                        ENG
                    </h6>
                </li>
                <li>
                    <h6
                        style={{ cursor: 'pointer', fontFamily: 'BPGweb' }}
                        onClick={() => handleLanguage('geo')}
                    >
                        ქარ
                    </h6>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSelectionHeader;
