import { useEffect, useRef } from "react";

const useObserver = (ref, callback, isHidden, options) => {
    const observer = useRef();

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }
        const cb = ([entry], observer) => {
            if (entry.isIntersecting) {
                callback(false);
            } else {
                if (entry.boundingClientRect.top > 0) {
                    callback(true);
                }
            }
        };

        observer.current = new IntersectionObserver(cb, options);
        observer.current.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isHidden]);
};

export default useObserver;