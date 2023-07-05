import React from 'react';
import './BPRButton.scss';

const BprButton = ({children, className,
                       onClick,
                       onMouseEnter, onMouseExit}) => {
    return (
        <button className={`button ${className ?? ''}`}
                onMouseLeave={onMouseExit}
                onMouseEnter={onMouseEnter}
                onClick={onClick}
        >
            {children}
        </button>
    );
};

export default BprButton;