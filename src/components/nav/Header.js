// Vendor imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { useEffect, useRef } from "react";

// Local imports
import "../../assets/css/nav/header.css";
// import useScreenSize from "../../hooks/useScreenSize";

function Header({ isMobile, parallax, sectionAnchors }) {
    // Determines what header styling config to show (fixed mobile vs normal desktop)
    let navClass = "nav-desktop";

    if (isMobile) {
        navClass = "nav-mobile";
    }

    return (
        <Navbar expand="lg" className={`nav-header ${navClass}`} >
            <Container className="header-wrapper">
                <Container className="header-top-wrapper">
                    <Navbar.Brand href="#" className="header-brand">
                        Alex Chen
                    </Navbar.Brand>
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        data-bs-toggle="collapse"
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
                                onClick={() => parallax.current.scrollTo(sectionAnchors["about"])}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link 
                                className="header-link"
                                onClick={() => parallax.current.scrollTo(sectionAnchors["skills"])}
                            >
                                Skills
                            </Nav.Link>
                            <Nav.Link 
                                className="header-link"
                            >
                                Projects
                            </Nav.Link>
                            <Nav.Link 
                                className="header-link"
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
