import React, {useState} from 'react';
import BottomLine from "../../Widgets/Separators/BottomLine";
import BPRButton from "../../Widgets/Buttons/blue-pink-redBtn/BPRButton";
import './Management.scss';
import AnimatedText from "../../AnimatedWidgets/Text/AnimatedText";
import {useInView} from "react-intersection-observer";
import googlePartnerImg from '../../Assets/images/Partner-CMYK.jpg';
import chefImg from '../../Assets/images/chef.webp';
import SignUp from "../SignUp/SignUp";
const Management = () => {
    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -35% 0px'
    });
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    return (
        <section className={'management'} ref={ref}>
            <div className={'management__inner'}>
                <SignUp open={isSignUpOpen} setOpen={setIsSignUpOpen}/>
                <div className={`management__chef ${inView ? 'show' : ''}`}>
                    <img src={chefImg} alt=""/>
                </div>
                <div className={`management__partners space-y-3 ${inView ? 'show' : ''}`}>
                    <div className={'google-partner'}>
                        <img src={googlePartnerImg} alt=""/>
                    </div>
                    <div className={'partners__information'}>
                        <div className={'partners__information--inner'}>
                            <h2>8</h2>
                            <h4>Years Google Partners</h4>
                        </div>
                    </div>
                </div>
                <div className={`company__description ${inView ? 'show' : ''}`}>
                    <div className={'company__description--inner'}>
                        <h2 className={'mb-3'}>
                            <AnimatedText charClassName={'char-h'}
                                          jump={true} delay={30}>iWeb company</AnimatedText>
                        </h2>
                        <p className={''}>
                            <AnimatedText charClassName={'char-p'}>
                                iWeb specializes in comprehensive solutions for promoting<br/>
                                websites on the Internet. Our company is a Google Partners Certified Agency. We create websites with passion and do advertising payback on the Internet
                            </AnimatedText>
                        </p>
                        <div className={'company__description-button'}>
                            <BPRButton onClick={() => {setIsSignUpOpen(true)}}>Call me!</BPRButton>
                        </div>
                    </div>
                </div>
            </div>
            <BottomLine position={'right'}/>
        </section>
    );
};

export default Management;