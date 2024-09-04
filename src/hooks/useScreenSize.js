// useScreenSize.js - keeps track of screen width and height constantly
import { useState, useEffect } from 'react';

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    function handleResize() {
        console.log({
            width: window.innerWidth,
            height: window.innerHeight
        });
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
}