import React, {useEffect, useRef, useState} from 'react';
import './Loading.scss';

const Loading = () => {
    const [isDone, setIsDone] = useState(false);
    const progressBar = useRef();
    useEffect(() => {
        console.log(progressBar.current);
        let progress = 0;
        let intervalID = setInterval(() => {
            progressBar.current.style.transform = `translateX(${progress++ / 5}%)`;
            if (progress > 500) {
                clearInterval(intervalID);
                setTimeout(() => {
                    setIsDone(true);
                }, 500);
            }
        }, 10);
    }, []);
    return (
        <>
            <div className={`pace ${isDone ? 'isDone' : ''}`}>
                <div className={'pace-progress'} ref={progressBar}>
                </div>
            </div>
            <div className={`loading ${isDone ? 'isDone' : ''}`}>
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </div>
            <div className={`preloader ${isDone ? 'isDone' : ''}`}>

            </div>
        </>
    );
};

export default Loading;