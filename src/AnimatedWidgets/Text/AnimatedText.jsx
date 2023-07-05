import React, {Fragment, useEffect, CSSProperties, useState} from 'react';
import './AnimatedText.scss';
import uuid4 from "uuid4";

const AnimatedText = ({children, charClassName, jumpDist, animationDuration,
                          whitespace, jump, delay}) => {
    const [words, setWords] = useState(null);
    useEffect(() => {
        if (typeof children === 'object') {
            let words = [];
            for (let i = 0; i < children.length; i++) {
                if (typeof children[i] === 'object') {
                    words.push(children[i]);
                } else {
                    let wordPart = children[i].split(' ').map(word => word.split(''));
                    words.push(...wordPart);
                }
            }
            setWords(words);
            return;
        } else {
            let words = children.split(' ');
            words = words.map(word => word.split(''));
            setWords(words);
        }
    }, [])

    const render = () => {
        let charIndex = 0;
        return words && words.map(word => {
            return (
                word.$$typeof
                    ? <br key={uuid4()}/>
                    :
                    <Fragment key={uuid4()}>
                                <span className={'word'}>
                                {word.length > 0 ? word.map(char =>
                                    <span key={uuid4()}
                                          style={{animationDelay: `${charIndex++ * (delay ?? 10)}ms`, top: `${jumpDist ?? 10}px`}}
                                          className={`${charClassName} char-anim ${jump ? 'jump' : ''}`}>
                                        {char}
                                    </span>) : null}
                                </span>
                        <span className={'whitespace'} style={{width: whitespace}}></span>
                    </Fragment>
            )
        })
    }
    return (
        <>
            {render()}
        </>
    );
};

export default AnimatedText;