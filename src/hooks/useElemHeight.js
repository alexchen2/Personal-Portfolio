import { useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export default function useElemHeight(queryTag) {
    // console.log(`Finding element: ${document.querySelector(queryTag)}`)
    const [elemRef, setElemRef] = useState(document.querySelector(queryTag));
    const [elemHeight, setElemHeight] = useState(0);

    useLayoutEffect(() => {
        if (elemRef) {
            console.log(`Test: ${typeof(elemRef)}`);
            setElemHeight(elemRef.clientHeight)
        } // } else {
        //     console.log("Test failed");
        // }
    }, [elemRef]);

    // useEffect(() => {
    //     console.log(elemRef.current)
    // }, [elemRef]);
    
    useResizeObserver(elemRef, (entry) => {
        const offset = entry.target.clientHeight;
        // console.log(`${entry.target.id}: ${offset}`)
        setElemHeight(offset);
    });

    return [elemRef, setElemRef, elemHeight];

    // const [elemOffset, setElemOffset] = useState(0);
    // const resizeObserver = new ResizeObserver((entries) => {
    //     for (const entry of entries) {
    //         if (entry.contentBoxSize[0] || entry.contentBoxSize) {
    //             setElemOffset(entry.target.offsetTop)
    //         }
    //     }
    // })

    // const elemRef = useCallback((elem) => {
    //     if (elem !== null) {
    //         setElemOffset(elemRef.current.offsetTop);
    //         console.log(`${elemRef.current.id} offset: ${elemOffset}`)
    //     }
    // }, []);

    // function handleScroll() {
    //     if (elemRef.current) {
    //         setElemOffset(elemRef.current.offsetTop);
    //         console.log(`${elemRef.current.id} offset: ${elemOffset}`)
    //     }
    // }
    // // WIP: Find a way to get elemRef to be assigned as ref to element after initial render
    // useEffect(() => {
    //     const element = elemRef.current;
    //     console.log(`Hello ${elemRef.current}`)

    //     if (element) {
    //         element.addEventListener('resize', handleScroll);
    //         return () => {
    //             element.removeEventListener('resize', handleScroll)
    //         }
    //     }

    // }, [elemRef])

    // return [elemRef, elemHeight];
}