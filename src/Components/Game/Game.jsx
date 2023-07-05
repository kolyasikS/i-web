import React from 'react';
import './Game.scss';
import Playground from "./Playground";

const Game = () => {
    return (
        <section className={'game'}>
            <div className={'game__container'}>
                <div className={'game-header space-x-1.5'}>
                    <div className={'game-circle'}></div>
                    <div className={'game-circle'}></div>
                    <div className={'game-circle'}></div>
                </div>
                <div className={'game__inner space-y-8'}>
                    <div className={'game-warning'}>
                        <p className={''}>
                            If you're tired, take a break! Set a new record
                        </p>
                    </div>
                    <Playground/>
                    <div className={'game-clue'}>
                        <p>
                            Tap anywhere to avoid rocks
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Game;