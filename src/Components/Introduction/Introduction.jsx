import React, {useCallback} from 'react';
import './styles/index.scss';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BottomLine from "../../Widgets/Separators/BottomLine";
import {useInView} from "react-intersection-observer";

const Introduction = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const {ref, inView, entry} = useInView({
        triggerOnce: false,
        rootMargin: '-21% 0px 0% 0px',
        onChange: (inView) => {
            if (inView) {
                document.querySelector('.header').classList.add('blur-off')
            } else {
                document.querySelector('.header').classList.remove('blur-off')
            }
        }
    });
    const scrollBottom = (e) => {
        let animationTime = 2000;
        let framesCount = 180;
        // убираем стандартное поведение
        e.preventDefault();

        let scroller = setInterval(function() {
            let scrollBy = document.body.scrollHeight / framesCount;
            if(document.documentElement.scrollTop < window.innerHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, window.innerHeight);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    }
    return (
        <section className={`w-full section flex items-center`}>
            <div className={'w-full flex items-center justify-center px-32 my-[200px]'} ref={ref}>
                <h1 className={'h-fit text-[62px] text-center font-extrabold leading-[1.4] title'}>We <span className={`transfusion`}>create inspiring</span> websites and cost-effective <span className={`transfusion`}>internet advertising</span> campaigns</h1>
            </div>
            <Particles  id="particles-js"
                        init={particlesInit}
                        canvasClassName={'canvas'}
                        options={{
                            fullScreen: false,
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "grab",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 1,
                                    },
                                    grab: {
                                        distance: 150,
                                        duration: 2,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 0.5,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1000,
                                    },
                                    value: 100,
                                },
                                opacity: {
                                    value: 0.5,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    value: { min: 1, max: 3 },
                                },
                            },
                            detectRetina: true,
                        }}/>

            <button className={'translate-button'} onClick={scrollBottom}></button>
            <BottomLine position={'left'}/>
        </section>
    );
};

export default Introduction;