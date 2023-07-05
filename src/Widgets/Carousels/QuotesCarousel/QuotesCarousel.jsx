import React, {useEffect, useRef, useState} from 'react';
import useWindowSize from "../../../Hooks/useWindowSize";
import uuid4 from "uuid4";
import QuotesCarouselItem from "../QuotesCarousel/QuotesCarouselItem";
import './QuotesCarousel.scss';

const QuotesCarousel = ({items, widthItem, heightItem}) => {
    const marginLeftItem = 28;
    const [listItems, setListItems] = useState(generateClones(items));
    const [clones, setClones] = useState({head: 2, tail: 2});
    const [currSlider, setCurrSlider] = useState(2);
    const [sizeItem, setSizeItem] = useState(null);
    const [widthScreen, heightScreen] = useWindowSize();
    const [offset, setOffset] = useState(0);
    const innerRef = useRef();
    const transitionTimeoutID = useRef(0);
    const intervalID = useRef(0);
    const isFirstRender = useRef(true);
    const [prevSlider, setPrevSlider] = useState([]);
    const [transitionDuration, setTransitionDuration] = useState(1000);
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        if (isHover) {
            clearInterval(intervalID.current);
        } else {
            intervalID.current = setInterval(() => {
                sliderToRight();
            }, 3000);
        }
    }, [isHover]);
    useEffect(() => {
        const sizeItem = window.outerWidth * 0.45;
        setSizeItem({width: sizeItem});//, height: sizeItem.height});
    }, []);
    useEffect(() => {
        if (widthScreen > 0) {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);
        }
    }, [widthScreen])
    useEffect(() => {
        if (isFirstRender.current) {
            return;
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

            return;
        } else if (currSlider > 15) {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);

            setTimeout(() => {
                setTransitionDuration(0);
                let offset = widthScreen / 2 - (sizeItem.width / 2)  - (listItems.length - currSlider) * (sizeItem.width + marginLeftItem);
                setOffset(offset);
                setCurrSlider(currSlider - (listItems.length - clones.tail - clones.head));
            }, 1000);
            return;
        } else {
            let offset = widthScreen / 2 - (sizeItem.width / 2)  - (currSlider) * (sizeItem.width + marginLeftItem);
            setOffset(offset);
        }
    }, [widthScreen, currSlider, clones, listItems]);
    function generateClones (items) {
        let itemsWithClones = [
            ...items.slice(items.length - 2, items.length).map(item => Object.assign({clone: true, isPrev: true}, {...item, id: uuid4()})),
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
        if (newCurrSlide > 15) {
            setPrevSlider([newCurrSlide - 1, 1, newCurrSlide - 1 - (listItems.length - clones.tail - clones.head)]);
        } else {
            setPrevSlider([newCurrSlide - 1]);
        }
    };
    const sliderToLeft = (newSlide) => {
        isFirstRender.current = false;
        if (!transitionDuration) {
            setTransitionDuration(1000);
        }
        let newCurrSlide = newSlide ?? currSlider - 1;
        setCurrSlider(newCurrSlide);
        if (newCurrSlide < 2) {
            setPrevSlider([newCurrSlide - 1, listItems.length - 5 + newCurrSlide]);
        } else {
            setPrevSlider([newCurrSlide - 1]);
        }
    };
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
        <div className={'carousel'}
             onMouseLeave={() => setIsHover(false)}
             onMouseEnter={() => setIsHover(true)}>
            <div className={'wrapper'}
                 onMouseDown={mouseDown}
                 onDragStart={() => false}>
                <div className={'inner space-x-7'} ref={innerRef} style={{
                    transitionDuration: `${transitionDuration}ms`,
                    translate: `${offset}px`
                }}>
                    {listItems.map((item, ind) => <QuotesCarouselItem key={item.id}
                                                                {...item}
                                                                isPrev={prevSlider.includes(ind)}
                                                                width={widthItem}
                                                                height={heightItem}
                    />)}
                </div>
            </div>
            <ul className={`dot-nav space-x-2`}>
                {items.map((item, ind) =>
                    <li key={ind} className={`dot-nav--item ${ind === currSlider - 2 ? 'active' : ''}`}
                        onClick={() => {
                            if (ind + 2 > currSlider) {
                                sliderToRight(ind + 2)
                            } else if (ind + 2 < currSlider) {
                                sliderToLeft(ind + 2);
                            }
                        }}
                    >
                    </li>
                )}
            </ul>
        </div>
    );
};

export default QuotesCarousel;