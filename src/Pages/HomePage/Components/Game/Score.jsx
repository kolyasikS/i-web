import React, {useEffect, useRef, useState} from 'react';
import game from "./Game";

const Score = ({gameOver, setResult}) => {
    const [record, setRecord] = useState(0);
    const [score, setScore] = useState(0);
    const intervalID = useRef(0);

    useEffect(() => {
        startScore();
    }, []);
    useEffect(() => {
        if (gameOver) {
            if (score) {
                setResult({score});
            }
            clearInterval(intervalID.current);
            intervalID.current = 0;
        } else {
            if (score > record) {
                setRecord(score);
            }
            setScore(0);
            startScore();
        }
    }, [gameOver]);

    const startScore = () => {
        if (intervalID.current) {
            return;
        }

        intervalID.current = setInterval(() => {
            setScore(prev => prev + 1);
        }, 400);
    }
    return (
        <div className={'game-score'}>
            <span>HI</span>
            <span className={'ml-2'}>{record}</span>
            <span className={'ml-5'}>{score}</span>
        </div>
    );
};

export default Score;