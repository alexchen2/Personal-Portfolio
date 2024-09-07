// Vendor imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useEffect, useRef } from "react";

// Local imports
import "../../assets/css/nav/header.css";
import { useContext, useState } from "react";
import { ParallaxContext } from "../../hooks/Contexts";
// import useScreenSize from "../../hooks/useScreenSize";

function Header({ isMobile, sectionAnchors }) {
    const parallax = useContext(ParallaxContext);
    
    const [expanded, setExpanded] = useState(false);
    // Determines what header styling config to show (fixed mobile vs normal desktop)
    let navClass = "nav-desktop";

    if (isMobile) {
        navClass = "nav-mobile";
    }

    function linkBehavior(linkAnchor) {
        console.log("Test")
        setExpanded(!expanded)
        parallax.current.scrollTo(sectionAnchors[linkAnchor], 0);
    }

    return (
        <Navbar expand="lg" expanded={expanded} className={`nav-header ${navClass}`} >
            <Container className="header-wrapper">
                <Container className="header-top-wrapper">
                    <Navbar.Brand className="header-brand">
                        <a href="">
                            Alex Chen
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        data-bs-toggle="collapse"
                        onClick={() => {setExpanded(!expanded)}}
                        className="d-flex d-lg-none flex-column justify-content-around"
                    >
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </Navbar.Toggle>
                </Container>
                <Navbar.Collapse>
                    <Container className="header-text">
                        <Nav className="header-link-group">
                            <Nav.Link 
                                className="header-link"
                                onClick={() => {linkBehavior("about")}}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link 
                                className="header-link"
                                onClick={() => {linkBehavior("skills")}}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                                className="header-link"
                                onClick={() => {linkBehavior("projects")}}
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link 
                                className="header-link"
                                onClick={() => {linkBehavior("contact")}}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
