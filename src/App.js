// import './assets/css/App.css';

// Bootstrap minified CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Vendor imports
import { Parallax } from "@react-spring/parallax";
import { MouseParallaxContainer } from "react-parallax-mouse";
import { useMediaQuery } from 'react-responsive';

// Local imports
import "./assets/css/App.css";
import Intro from './pages/Intro';
import About from "./pages/About";
import Header from "./components/nav/Header";
import useParallaxScroll from './hooks/useParallaxScroll';
import Skills from './pages/Skills';
import { config } from 'react-spring';


// Vendor imports
import { ParallaxLayer } from "@react-spring/parallax";

// Local imports
import SkillsBG from "./assets/vendor/img/skills/desk-1.png";
import Projects from './pages/Projects';

function App() {
    const parallax = useParallaxScroll();

    const sectionAnchors = {
        about: 0.65,
        skills: 1.24
    }

    return (
        <>
            <Header isMobile={true} parallax={parallax} sectionAnchors={sectionAnchors} />
            <Parallax
                pages={4}
                ref={parallax}
                className="animation"
                
            >
                {/* Intro & About Sections */}
                <MouseParallaxContainer 
                    globalFactorX={0.1} 
                    globalFactorY={0.1}
                    containerStyle={{
                        width: "100%",
                        height: "100%",
                        overflow: "visible"
                    }}
                    // inverted={true}
                >
                    {/* App header for larger, desktop screens */}
                    <Header isMobile={false} parallax={parallax} sectionAnchors={sectionAnchors} />
                    
                    {/* 
                        Parallax is broken in React Spring, so later sections following at the same speed
                        as the last parallaxLayer in the Intro have to be contained within it, in order to 
                        prevent issues with responsive web design (smaller screen widths create huge gaps
                        between sections). As such, later sections are to be passed in Intro as children
                        to be inserted within the final Intro parallaxLayer.

                        God damn it React.
                    */}
                    <Intro parallax={parallax}>
                        <About parallax={parallax} />
                        <Skills parallax={parallax} />
                        <Projects parallax={parallax} />
                    </Intro>
                </MouseParallaxContainer>

                {/* Fixed Skills BG */}
                <ParallaxLayer 
                    className="bg-layer" 
                    offset={1} 
                    speed={-1} 
                    sticky={{start: 0, end: 3}} 
                    style={{
                        zIndex: -9999,
                        backgroundImage: `url(${SkillsBG})`
                    }}
                >
                        {/* <img src={SkillsBG} alt="" /> */}
                </ParallaxLayer>
            </Parallax>
        </>
    );
}

export default App;
