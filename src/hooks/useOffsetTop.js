import { useEffect, useRef } from "react";

export default function useOffsetTop() {
    const elemRef = useRef();
    const elemOffset = useRef(0);

    function handleScroll() {
        if (elemRef.current) {

            elemOffset.current = elemRef.current.offsetTop;
            console.log(`${elemRef.current.id} offset: ${elemOffset.current}`)
        }
    }
    // WIP: Find a way to get elemRef to be assigned as ref to element after initial render
    useEffect(() => {
        const element = elemRef.current;
        console.log("Hello")

        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => {
                element.removeEventListener('scroll', handleScroll)
            }
        }

    }, [elemRef])

    return [elemRef, elemOffset];
}