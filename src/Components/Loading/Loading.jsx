import React, {useEffect, useRef, useState} from 'react';
import './Loading.scss';

const Loading = () => {
    const [isDone, setIsDone] = useState(false);
    const progressBar = useRef();
    const firstRender = useRef(1);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = 0;
            return;
        }
        let progress = 0;
        let intervalID = setInterval(() => {
            progressBar.current.style.transform = `translate3d(${progress++ / 5}%, 0, 0)`;
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