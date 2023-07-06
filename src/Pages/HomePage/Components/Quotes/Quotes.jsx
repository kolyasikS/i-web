import React, {useRef, useState} from 'react';
import './Quotes.scss';
import ProjectCarousel from "../../../../Widgets/Carousels/ProjectCarousel/ProjectCarousel";
import quotesCarouselItems from "../../StaticData/QuotesCarouselItems";
import QuotesCarousel from "../../../../Widgets/Carousels/QuotesCarousel/QuotesCarousel";
import {useInView} from "react-intersection-observer";

const Quotes = () => {
    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -26% 0px'
    });
    return (
        <section className={`quotes ${inView ? 'show' : ''}`} ref={ref}>
            <div className={'quotes__container'}>
                <QuotesCarousel items={quotesCarouselItems}
                                 widthItem={'45vw'}
                                 heightItem={'80%'}
                />
            </div>
        </section>
    );
};

export default Quotes;