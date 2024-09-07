// useParallaxScroll.js - Exploit to access scroll position of Parallax component with useRef hook
import { useRef, useEffect } from 'react';

export default function useParallaxScroll() {
    const parallax = useRef();

    function handleScroll() {
        if (parallax.current) {
            console.log(parallax.current.current);
        }
    }

    useEffect(() => {
        const container = parallax.current.container.current;
        container.addEventListener('scroll', handleScroll)
        parallax.current.config = { tension: 180, friction: 40 };
        return () => {
            container.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return parallax;
}