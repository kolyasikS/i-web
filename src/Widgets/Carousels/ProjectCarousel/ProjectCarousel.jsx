import React, {useEffect, useRef, useState} from 'react';
import ProjectCarouselItem from "./ProjectCarouselItem";
import './projectCarousel.scss';
import useWindowSize from "../../../Hooks/useWindowSize";
import uuid4 from "uuid4";
import {useInView} from "react-intersection-observer";

const ProjectCarousel = ({items, widthItem, heightItem}) => {
    const marginLeftItem = 28;
    const [listItems, setListItems] = useState(generateClones(items));
    const [clones, setClones] = useState({head: 2, tail: 2});
    const [currSlider, setCurrSlider] = useState(2);
    const [sizeItem, setSizeItem] = useState(null);
    const [widthScreen, heightScreen] = useWindowSize();
    const [offset, setOffset] = useState(0);
    const innerRef = useRef();
    const transitionTimeoutID = useRef(0);
    const isFirstRender = useRef(true);
    const [timeoutID, setTimeoutID] = useState(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [transitionDuration, setTransitionDuration] = useState(1000);
    useEffect(() => {
        const sizeItem = innerRef.current.children[0].getClientRects()[0];
        setSizeItem({width: sizeItem.width, height: sizeItem.height});
    }, []);
    useEffect(() => {
        if (isFirstRender.current) {
            return;
        }
        if (timeoutID) {
            return;
        }
        if (isButtonClicked) {
            setTimeoutID(setTimeout(() => {
                setIsButtonClicked(false);
                setTimeoutID(null);
            }, 1000));
        }
        if (currSlider < 2) {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);

            setTimeout(() => {
                setTransitionDuration(0);
                let offset = widthScreen / 2 - (sizeItem.width / 2)  - (listItems.length - clones.tail - currSlider) * (sizeItem.width + marginLeftItem);
                setOffset(offset);
                setCurrSlider(listItems.length - clones.tail - (clones.head - currSlider));
            }, 1000);
            //setCurrSlider(listItems.length - clones.tail - currSlider);

            return;
        } else if (currSlider > 10) {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);

            setTimeout(() => {
                setTransitionDuration(0);
                let offset = widthScreen / 2 - (sizeItem.width / 2)  - (listItems.length - currSlider) * (sizeItem.width + marginLeftItem);
                setOffset(offset);
                setCurrSlider(currSlider - (listItems.length - clones.tail - clones.head));
            }, 1000);
            //setCurrSlider(listItems.length - currSlider);
            return;
        } else {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);
            setTimeout(() => {
            }, 1000);
        }
    }, [widthScreen, currSlider, clones, listItems]);
    useEffect(() => {
        if (widthScreen > 0) {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);
        }
    }, [widthScreen])
    function generateClones (items) {
        let itemsWithClones = [
            ...items.slice(items.length - 2, items.length).map(item => Object.assign({clone: true}, {...item, id: uuid4()})),
            ...items,
            ...items.slice(0, 2).map(item => Object.assign({clone: true}, {...item, id: uuid4()}))
        ];

        return itemsWithClones;
    }
    const sliderToRight = (newSlide) => {
        isFirstRender.current = false;

        if (!transitionDuration) {
            setTransitionDuration(1000);
        }
        let newCurrSlide = newSlide ?? currSlider + 1;
        setCurrSlider(newCurrSlide);
    };
    const sliderToLeft = (newSlide) => {
        isFirstRender.current = false;

        if (!transitionDuration) {
            setTransitionDuration(1000);
        }
        let newCurrSlide = newSlide ?? currSlider - 1;
        setCurrSlider(newCurrSlide);
    };
    const {ref, inView, entry} = useInView({

        triggerOnce: true,
        rootMargin: '0px 0px -65% 0px'
    });
    const mouseDown = (eventMouseDown) => {
        if (!innerRef.current || transitionTimeoutID.current) {
            return;
        }
        innerRef.current.style.transitionDuration = '0ms';
        const startPos = eventMouseDown.clientX;
        let currentTranslate = parseFloat(innerRef.current.style.translate);
        if (Number.isNaN(currentTranslate)) {
            currentTranslate = 0;
        }
        const onMouseMove = (e) => {
            if (e.clientX > document.documentElement.clientWidth) {
                document.removeEventListener('mousemove', onMouseMove)
                return;
            }
            moveAt(eventMouseDown.target, e.clientX, startPos, currentTranslate);
        }
        function moveAt(wrapper, clientX, startPos, translate) {

            innerRef.current.style.translate = `${clientX - startPos + translate}px`;
        }
        function clearEventListener() {
            innerRef.current.style.transitionDuration = '1000ms';
            transitionTimeoutID.current = setTimeout(() => {
                transitionTimeoutID.current = 0;
            }, 500);
            const differencePos = Math.abs(parseFloat(innerRef.current.style.translate) - currentTranslate);

            if (differencePos < sizeItem.width / 2) {
                innerRef.current.style.translate = `${offset}px`;
            } else {
                let sideMoving = parseFloat(innerRef.current.style.translate) - currentTranslate < 0 ? 'right' : 'left';
                let amountSlides = Math.trunc((differencePos - sizeItem.width / 2) / sizeItem.width) + 1;
                console.log(sizeItem.width);
                switch (sideMoving) {
                    case 'left':
                        sliderToLeft(currSlider - amountSlides);
                        break;
                    case 'right':
                        sliderToRight(currSlider + amountSlides);
                        break;
                }
            }

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', clearEventListener);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', clearEventListener);

    }
    return (
        <div className={'carousel'} ref={ref}>
            <div className={'wrapper'}
                 onMouseDown={mouseDown}
                 onDragStart={() => false}
            >
                <div className={'inner space-x-7'} ref={innerRef} style={{
                    translate: `${(offset)}px`,
                    transitionDuration: `${transitionDuration}ms`
                }}>
                    {listItems.map((item, ind) => <ProjectCarouselItem key={item.id}
                                                            {...item} inView={inView}
                                                            width={widthItem} active={ind === currSlider}
                                                            height={heightItem}
                                                            borderSlide={transitionDuration === 0}
                    />)}
                </div>
            </div>
            <div className={'carousel-btn left-[150px]'} onClick={() => {
                if (isButtonClicked) {
                    return;
                }
                setIsButtonClicked(true);
                sliderToLeft()
            }}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="15px" height="15px" viewBox="0 0 306 306" space="preserve" className={'rotate-180'}>
                    <g>
                        <g id="keyboard-arrow-right" fill={'rgb(18, 194, 233)'}>
                            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className={'carousel-btn left-[230px]'} onClick={() => {
                if (isButtonClicked) {
                    return;
                }
                setIsButtonClicked(true);
                sliderToRight()
            }}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     width="15px" height="15px" viewBox="0 0 306 306" space="preserve">
                    <g>
                        <g id="keyboard-arrow-right" fill={'rgb(18, 194, 233)'}>
                            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default ProjectCarousel;