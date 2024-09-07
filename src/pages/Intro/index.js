// Vendor imports
import { ParallaxLayer } from "@react-spring/parallax";
import { MouseParallaxChild } from "react-parallax-mouse";
import { useMediaQuery } from 'react-responsive';

// Local imports
import "../../assets/css/intro/intro.css"
import IntroHeading from "./IntroHeading";

// File imports
import ArrowDown from "../../assets/vendor/img/intro/arrow-down.png";
import { useContext } from "react";
import { HeightRefContext, ParallaxContext } from "../../hooks/Contexts";

function Intro({ children, sectionAnchors }) {
    const parallax = useContext(ParallaxContext);
    const setIntroRef = useContext(HeightRefContext)["intro"];

    // TODO: Use useEffect for dynamic breakpoints, such that headings 
    // adjust offset on diff screen sizes
    const isMobile = useMediaQuery({ query: '(max-width: 991px)' });
    let mouseParallaxLayers = {
        sky: (
            <div className="animation-layer parallax" id="img-sky" />
        ),
        mountain2: (
            <div className="animation-layer parallax" id="img-mountain2" />
        ),
        temple: (
            <div className="animation-layer parallax" id="img-temple" />
        ),
        mountain1: (
            <div ref={setIntroRef} className="animation-layer parallax" id="img-mountain1" />
        )
    };

    if (!isMobile) {
        mouseParallaxLayers = {
            sky: (
                <MouseParallaxChild factorX={0.01} factorY={0.025} style={{height: "100%"}}>
                    <div className="animation-layer parallax" id="img-sky" />
                </MouseParallaxChild>
            ),
            mountain2: (
                <MouseParallaxChild factorX={0.05} factorY={0.05}>
                    <div className="animation-layer parallax" id="img-mountain2" />
                </MouseParallaxChild> 
            ),
            temple: (
                <MouseParallaxChild factorX={0.15} factorY={0.16}>
                    <div className="animation-layer parallax" id="img-temple" />
                </MouseParallaxChild> 
            ),
            mountain1: (
                <MouseParallaxChild factorX={0.4} factorY={0.3}>
                    <div ref={setIntroRef} className="animation-layer parallax" id="img-mountain1" />
                </MouseParallaxChild>
            )
        }
    }

    // Set up custom hook for scrolling to elements
    // const {scrollTo} = useScrollTo(config.slow)

    return (
        <>
            <ParallaxLayer offset={0} speed={0.05} id="parallax-sky">
                {mouseParallaxLayers["sky"]}
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.175} id="parallax-mountain2">
                {mouseParallaxLayers["mountain2"]}
            </ParallaxLayer>
            <ParallaxLayer offset={0.31} speed={-0.2} id="parallax-text">
                <div className="animation-layer parallax" id="intro-text">
                    <IntroHeading />
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35} id="parallax-temple">
                {mouseParallaxLayers["temple"]}
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.6} id="parallax-mountain1">
                {mouseParallaxLayers["mountain1"]}
                <button 
                    id="learn-more" 
                    type="button"
                    onClick={() => parallax.current.scrollTo(sectionAnchors["about"])}>
                    <span id="learn-text">LEARN MORE</span>
                    <img draggable="false" id="learn-arrow" src={ArrowDown} alt="" />
                </button>
                { children }
            </ParallaxLayer>
        </>
    )
}

export default Intro;
