import React, {useEffect, useRef, useState} from 'react';
import Stone from "./Stone";
import uuid4 from "uuid4";
import Score from "./Score";
const Playground = () => {

    const [isUpper, setIsUpper] = useState(false);
    const [gameOver, setGameOver] = useState(true);
    const [stones, setStones] = useState([]);
    const intervalID = useRef(0);
    const [result, setResult] = useState(null);
    useEffect(() => {
        if (gameOver) {
            clearInterval(intervalID.current);
            intervalID.current = 0;
        } else {
            startGame();
        }
    }, [gameOver]);
    const startGame = () => {
        if (intervalID.current) {
            return;
        }
        setStones(generateStone());
        intervalID.current = setInterval(() => {
            setStones(generateStone());
        }, 3300);
    }
    function generateStone() {
        let newStones = [];
        let [minValue, maxValue] = [10, 50];
        let curve1 = Math.random() * maxValue + minValue;
        let curve2 = Math.random() * maxValue + minValue;
        let curve3 = Math.random() * maxValue + minValue;
        let curve4 = Math.random() * maxValue + minValue;

        /*if (Math.round(Math.random() * 3) < 3) {
            let curve1 = Math.random() * maxValue + minValue;
            let curve2 = Math.random() * maxValue + minValue;
            let curve3 = Math.random() * maxValue + minValue;
            let curve4 = Math.random() * maxValue + minValue;

            let stone = {
                id: uuid4(),
                animationDelay: '0.8s',
                clipPath: `polygon(100% 100%, 0% 100%, 10% ${curve1}%, 33% ${curve2}%, 66% ${curve3}%, 90% ${curve4}%)`
            }

            newStones.push(stone);
        }*/
        let stone = {
            id: uuid4(),
            clipPath: `polygon(100% 100%, 0% 100%, 10% ${curve1}%, 33% ${curve2}%, 66% ${curve3}%, 90% ${curve4}%)`
        }
        newStones.push(stone);
        return newStones;
    }
    const carToUp = () => {
        setIsUpper(true);
        setTimeout(() => {
            setIsUpper(false);
        }, 700);
    }
    return (
        <div className={'playground-wrapper'}>
            <div className={`playground ${gameOver ? 'dead' : ''}`}
                 onClick={carToUp}>
                <div className={`game-car ${isUpper ? 'up' : ''}`}></div>
            </div>
            {stones.map(item => <Stone key={item.id}
                                       gameOver={gameOver}
                                       setGameOver={setGameOver}
                                       isUpper={isUpper}
                                       {...item}/>)})
            <Score gameOver={gameOver} setResult={setResult}/>
            {gameOver && <div className={`game-over`} onClick={() => {setGameOver(false)}}>
                {result
                    ? <>
                        <p>GAME OVER</p>
                        <p>YOU SCORED: {result.score}</p>
                        <span className={'playground-play-icon'}></span>
                    </>
                    : <>
                        <p>PLAY</p>
                        <span className={'playground-play-icon'}></span>
                    </>
                }
            </div>}
        </div>
    );
};

export default Playground;