import React from 'react';

const Notification = ({ isActive, status, message }) => {
    if (isActive) {
        return (
            <div className={`notification ${status ? 'success' : 'fail'}`}>
                <p>{message}</p>
            </div>
        );
    }
    return null;
};

export default Notification;
