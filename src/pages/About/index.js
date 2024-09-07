// Vendor imports
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// local imports
import "../../assets/css/about/about.css"
import SelfPortrait from "../../assets/vendor/img/intro/portrait_2.jpg";
import { useCallback, useLayoutEffect, useEffect, useRef, useState, useContext } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import useElemHeight from "../../hooks/useElemHeight";
import { HeightRefContext, ParallaxContext } from "../../hooks/Contexts";

function AboutImage() {
    const parallax = useContext(ParallaxContext);
    
    if (parallax.current.current) {
        // TODO: activate hover animation once scrolled into view, and replace
        //       hover psuedo-tag with proper class tag
    }

    return(
        <div id="about-image-panel">
            <img src={SelfPortrait} alt="" />
        </div>
    )
}

function About() {
    const setAboutRef = useContext(HeightRefContext)["about"];

    return( 
        <div ref={newRef => {setAboutRef(newRef)}} id="about-background">
            <Container className="section-wrapper" id="about-wrapper">
                <Row>
                    <Col lg="7" className="section-content" id="about-text">
                        <div id="about-heading">
                            <span id="about-mheading">
                                Hey, I’m Alex.
                            </span>
                            <span id="about-sheading">
                                I’m a detail-oriented software developer dedicated to crafting immersive experiences.
                            </span>
                        </div>
                        <div id="about-body">
                            I’m currently a third-year student at McMaster University in Ontario, pursuing a computer science major with a minor in mathematics. Over the past three years, I’ve immersed myself into web development, creating numerous responsive dynamic webpages. As such, I’m experienced with both front and back-end development, having worked with popular frameworks and libraries like Flask, React, and Express.js. I’ve also taken an interest in machine learning recently.<br /> <br />

                            When I’m not engrossed in my IDE, you can usually find me binging the latest seasonal anime, traveling around Taiwan, or grinding online races in Mario Kart 8 Deluxe.
                        </div>
                    </Col>
                    <Col className="section-content" id="about-image">
                        <AboutImage />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;