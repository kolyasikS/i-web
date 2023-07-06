import React, {useRef, useState} from 'react';
import './lastProjects.scss';
import ProjectCarousel from "../../../../Widgets/Carousels/ProjectCarousel/ProjectCarousel";
import projectCarouselItems from '../../StaticData/ProjectsCarouselItems';
import useObserver from "../../../../Hooks/useObserver";
import { useInView } from 'react-intersection-observer';

const LastProjects = () => {
    const {ref, inView, entry} = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -20% 0px'
    });

    return (
        <section className={'pt-12 pb-32 flex justify-center w-full'}>
            <div className={'w-full flex flex-col items-center justify-center'}>
                <div className={'max-w-screen-xl w-full px-10 mb-20'} ref={ref}>
                    <div className={'title-block'}>
                        <h3 className={`title-block__subtitle ${inView ? 'show' : ''}`}>Portfolio</h3>
                        <h1 className={`title-block__title ${inView ? 'show' : ''}`}>Our Recent Web Design &
                            Some Past Projects.</h1>
                    </div>
                </div>
                <div className={'max-w-full'}>
                    <ProjectCarousel items={projectCarouselItems}
                                     widthItem={'40vw'}
                                     heightItem={'80%'}
                    />
                </div>
            </div>
        </section>
    );
};

export default LastProjects;