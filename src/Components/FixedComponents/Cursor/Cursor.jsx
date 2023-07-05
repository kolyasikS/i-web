import React, {useCallback, useEffect, useRef, useState} from 'react';
import './Cursor.scss';

const Cursor = () => {
    const firstRender = useRef(1);
    const [pos, setPos] = useState({});
    const [cursorHover, setCursorHover] = useState(false);
    const mouseMove = useCallback((e) => {
        setPos({left: e.clientX, top: e.clientY});
    }, [cursorHover]);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = 0;
            return;
        }
        let links = document.querySelectorAll('a');
        links.forEach(item => {
            item.addEventListener('mouseenter', () => {
                setCursorHover(true);
            })
            item.addEventListener('mouseleave', () => {
                setCursorHover(false);
            })
        })
        window.addEventListener('mousemove', mouseMove);
    });
    return (
        <>
        <div className={`cursor-outer ${cursorHover ? 'hover' : ''}`}
             style={{transform: `translate(${pos.left}px, ${pos.top}px)`}}>
        </div>
        <div className={`cursor-inner ${cursorHover ? 'hover' : ''}`}
             style={{transform: `translate(${pos.left}px, ${pos.top}px)`}}></div>
        </>
    );
};

export default Cursor;