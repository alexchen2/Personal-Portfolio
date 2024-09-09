// useElemHeight.js - Hook that tracks the dynamic height of elements in the document (passing useElemRef function as a ref)

import { useLayoutEffect, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export default function useElemHeight(queryTag) {
    // Using useState instead of useRef, since useRef doesn't get value properly before initial two renders
    const [elemRef, setElemRef] = useState(document.querySelector(queryTag));
    const [elemHeight, setElemHeight] = useState(0);

    // Getting initial set height of element
    useLayoutEffect(() => {
        if (elemRef) {
            console.log(`Test: ${typeof(elemRef)}`);
            setElemHeight(elemRef.clientHeight)
        }
    }, [elemRef]);

    // Use external hook to track when an element is resized 
    useResizeObserver(elemRef, (entry) => {
        const offset = entry.target.clientHeight;
        setElemHeight(offset);
    });

    return [setElemRef, elemHeight];
}