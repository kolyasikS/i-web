import React, {useState} from 'react';
import AnimatedText from "../../AnimatedWidgets/Text/AnimatedText";
import BPRButton from "../../Widgets/Buttons/blue-pink-redBtn/BPRButton";
import './NextProject.scss';
import {useInView} from "react-intersection-observer";
import Rocket from "./Rocket";

const NextProject = () => {
    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -35% 0px'
    });
    return (
        <section className={'nextProject'} ref={ref}>
            <div className={'nextProject__inner space-x-36'}>
                <div className={`nextProject__inner-text ${inView ? 'show' : ''}`}>
                    <h6>
                        <AnimatedText charClassName={'h6'}
                                      jump={true} jumpDist={20}
                                      delay={30}>LET'S TALK</AnimatedText>
                    </h6>
                    <h2>
                        <AnimatedText charClassName={'h2 top'}
                                      jump={true} jumpDist={20}
                                      delay={30} whitespace={20}>ABOUT YOUR</AnimatedText>
                        <br/>
                        <span className={'h2 bottom wrapper'}>
                            <AnimatedText charClassName={'h2 bottom'}
                                          jump={true} jumpDist={20}
                                          delay={35} whitespace={20}>NEXT PROJECT</AnimatedText>
                        </span>
                    </h2>
                </div>
                <Rocket/>
            </div>
        </section>
    );
};

export default NextProject;