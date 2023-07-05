import React, {useEffect, useRef, useState} from 'react';

const Stone = ({animationDelay, clipPath, isUpper, gameOver,
                   animationDuration, setGameOver}) => {
    const intervalID = useRef(0);
    const stoneRef = useRef();
    useEffect(() => {
        if (intervalID.current) {
            return;
        }
        intervalID.current = setInterval(() => {
            if (!stoneRef.current) {
                clearInterval(intervalID.current);
                return;
            }
            const left = stoneRef.current.offsetLeft;
            if (!document.querySelector('.game-car.up') && left < 76 && left > 24) {
                setGameOver(true);

                clearInterval(intervalID.current);
                intervalID.current = 0;
            }
        });

    }, []);
    return (
        <div className={`game-stone ${gameOver ? 'dead' : ''}`} ref={stoneRef}
             style={{animationDelay,
                 clipPath,
                 animationDuration,
             }}
        >
        </div>
    );
};

export default Stone;