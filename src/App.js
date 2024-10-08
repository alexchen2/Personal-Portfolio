// import './assets/css/App.css';

// Bootstrap minified CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Vendor imports
import { useRef, useLayoutEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { MouseParallaxContainer } from "react-parallax-mouse";

// Local imports
import "./assets/css/App.css";
import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import Intro from './pages/Intro';
import About from "./pages/About";
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import useParallaxScroll from './hooks/useParallaxScroll';
import useScreenSize from './hooks/useScreenSize';
import useElemHeight from './hooks/useElemHeight';
import VertScrollMenu from './components/nav/VertScrollMenu';
import {HeightRefContext, ParallaxContext} from './context/Contexts';

// File imports
import SkillsBG from "./assets/vendor/img/skills/desk-3.png";
import ContactBG from "./assets/vendor/img/contact/jiufen-temple.png";
import GoToBtn from './assets/vendor/img/projects/go-to.png';

function App() {
    // Hooks and Contexts
    const parallax = useParallaxScroll();
    const screenSize = useScreenSize();
    const [setIntroRef, introHeight] = useElemHeight("#parallax-mountain1");
    const [setAboutRef, aboutHeight] = useElemHeight("#about-background");
    const [setSkillsRef, skillsHeight] = useElemHeight("#skills-background");
    const [setProjectsRef, projectsHeight] = useElemHeight("#projects-background");
    const [setContactRef, contactHeight] = useElemHeight("#contact-background");
    
    const [totalPages, setTotalPages] = useState();
    const skillsBGRef = useRef();
    const contactBGRef = useRef();

    const refFuncObj = {
        intro: setIntroRef,
        about: setAboutRef,
        skills: setSkillsRef,
        projects: setProjectsRef,
        contact: setContactRef
    };
    const scrollRate = 0.625;

    // Custom object storing the beginning part of all page sections, dependent on current device height and prior section heights
    const sectionAnchors = {
        about: ((introHeight / screenSize["height"]) * scrollRate), 
        skills: (((introHeight + aboutHeight) / screenSize["height"]) * scrollRate),
        projects: (((introHeight + aboutHeight + skillsHeight) / screenSize["height"]) * scrollRate),
        contact: (((introHeight + aboutHeight + skillsHeight + projectsHeight) / screenSize["height"]) * scrollRate),
    };

    // Custom object storing variable heights of all page sections, dependent on current device height and prior section heights
    const sectionHeights = {
        intro: 0,
        about: introHeight,  
        skills: introHeight + aboutHeight,
        projects: introHeight + aboutHeight + skillsHeight,
        contact: introHeight + aboutHeight + skillsHeight + projectsHeight - (screenSize["height"] / 2),
        end: introHeight + aboutHeight + skillsHeight + projectsHeight + contactHeight
    };

    useLayoutEffect(() => {
        // Set total page height (this is a convoluted mess of a formula... screw you react spring)
        let mobileHeight = ((800 / (0.00625 * (screenSize["height"] + 5600))) - 20) > 0 ? ((800 / (0.00625 * (screenSize["height"] + 5600))) - 20) : 0;
        setTotalPages((((introHeight + aboutHeight + skillsHeight + projectsHeight + contactHeight) / screenSize["height"]) ** 0.823) + (mobileHeight));
        
        // Set sticky page "endpoints" dynamically for Skills and Contact section backgrounds
        if (skillsBGRef.current) {
            skillsBGRef.current.sticky = {
                start: 0, 
                end: ((sectionAnchors["projects"] + sectionAnchors["contact"]) / 2) + (mobileHeight / 2)
            };
        }
        
        if (contactBGRef.current) {
            contactBGRef.current.sticky = {
                start: ((sectionAnchors["projects"] + sectionAnchors["contact"]) / 2) + (mobileHeight / 2), 
                end: (((introHeight + aboutHeight + skillsHeight + projectsHeight + contactHeight) / screenSize["height"]) ** 0.823) + (mobileHeight)
            };
        }
    }, [introHeight, aboutHeight, skillsHeight, projectsHeight, contactHeight, screenSize])

    return (
        <HeightRefContext.Provider value={refFuncObj}>
            <ParallaxContext.Provider value={parallax}>
                <Header isMobile={true} sectionAnchors={sectionAnchors} />
                <Parallax
                    pages={totalPages}   // TODO: This little motherfucker of an issue is giving me an assfucking right now
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
                        <Header isMobile={false} sectionAnchors={sectionAnchors} />
                        
                        {/* 
                            Parallax is broken/unintuitive in React Spring, so later sections following at the same speed
                            as the last parallaxLayer in the Intro have to be contained within it, in order to 
                            prevent issues with responsive web design (smaller screen widths create huge gaps
                            between sections). As such, later sections are to be passed in Intro as children
                            to be inserted within the final Intro parallaxLayer.

                            God damn it React.
                        */}
                        <Intro sectionAnchors={sectionAnchors}>
                            <About />
                            <Skills />
                            <Projects />
                            <a href='https://github.com/alexchen2'>
                                <div id="projects-gh-btn">
                                    <img src={GoToBtn} alt="" />
                                    <span>CHECK OUT MORE PROJECTS</span>
                                </div>
                            </a>
                            <Contact />
                        </Intro>
                    </MouseParallaxContainer>

                    {/* Fixed Skills BG */}
                    <ParallaxLayer 
                        className="bg-layer" 
                        ref={skillsBGRef}
                        offset={1} 
                        speed={-1} 
                        sticky={{start: 0, end: 4 }} 
                        style={{
                            zIndex: -9999,
                            backgroundImage: `url(${SkillsBG})`
                        }}
                    >
                    </ParallaxLayer>
                    {/* Fixed Contact BG */}
                    <ParallaxLayer 
                        className="bg-layer" 
                        ref={contactBGRef}
                        offset={2} 
                        speed={-1} 
                        sticky={{start: 3.5, end: 10}} 
                        style={{
                            zIndex: -10000,
                            backgroundImage: `url(${ContactBG})`
                        }}
                    >
                    </ParallaxLayer>
                    <Footer />
                </Parallax>
                <VertScrollMenu sectionAnchors={sectionAnchors} sectionHeights={sectionHeights} />
            </ParallaxContext.Provider>
        </HeightRefContext.Provider>
    );
}

export default App;
