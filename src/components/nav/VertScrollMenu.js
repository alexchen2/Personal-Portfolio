// VertScrollMenu.js - fixed right-side scrollspy menu for navigation (only appears in desktop view >991px)

// Vendor imports
import { useContext, useEffect, useState } from "react";

// Local imports
import "../../assets/css/nav/vertScrollMenu.css";
import { ParallaxContext } from "../../context/Contexts";

// Individual circular button within vertical menu
function VertScrollButton({ sectionAnchor, startHeight, endHeight, tooltipText }) {
    const parallax = useContext(ParallaxContext);
    const [btnClass, setBtnClass] = useState("scrollspy-btn");

    // Detects when viewport is in button's respective section, and changes button visually to show (fade to green)
    function handleVertScroll() {
        if (
            parallax.current.current < ((endHeight * 0.625) - 50)
            && parallax.current.current >= ((startHeight * 0.625) - 50)
        ) {
            setBtnClass("scrollspy-btn in-section");
            // console.log(`VertBTN ${tooltipText}`)
        } else {
            setBtnClass("scrollspy-btn");
        }
    }

    // Add detection function to button via scroll event listeners
    useEffect(() => {
        if (parallax.current !== undefined) {
            const container = parallax.current.container.current;
            container.addEventListener("scroll", handleVertScroll)

            
            return () => {
                container.removeEventListener("scroll", handleVertScroll)
            }
        }

    }, [parallax.current, startHeight, endHeight])

    return(
        <div 
            className={btnClass}
            onClick={() => {parallax.current.scrollTo(sectionAnchor, 0)}}
        >
            <span>{tooltipText}</span>
        </div>
    )
}

// Outer container for scrollspy menu buttons
function VertScrollMenu({ sectionAnchors, sectionHeights }) {
    const parallax = useContext(ParallaxContext);
    const [menuHidden, setMenuHidden] = useState("hidden");

    // Handles visibility of menu when viewport is in the intro section (hidden there, and visible everywhere elsewhere)
    function handleMenuVisible() {
        // console.log(`VertMenuTest ${parallax.current.current}, ${sectionHeights["intro"] * 0.625}`)
        if (parallax.current.current < (sectionHeights["about"] * 0.4)) {
            setMenuHidden("hidden");
        } else {
            setMenuHidden("");
        }
    }

    // Attach visibility function above to menu via a scroll event listener
    useEffect(() => {
        if (parallax.current !== undefined) {
            const container = parallax.current.container.current;
            container.addEventListener("scroll", handleMenuVisible)
            
            return () => {
                container.removeEventListener("scroll", handleMenuVisible)
            }
        }

    }, [parallax.current, sectionHeights])

    return(
        <div id="scrollspy-wrapper" className={menuHidden}>
            <VertScrollButton
                sectionAnchor={sectionAnchors["intro"]} 
                startHeight={sectionHeights["intro"]} 
                endHeight={sectionHeights["about"]}
                tooltipText={"Intro"} 
            />
            <VertScrollButton 
                sectionAnchor={sectionAnchors["about"]}             
                startHeight={sectionHeights["about"]} 
                endHeight={sectionHeights["skills"]}
                tooltipText={"About"} 
            />
            <VertScrollButton 
                sectionAnchor={sectionAnchors["skills"]}             
                startHeight={sectionHeights["skills"]} 
                endHeight={sectionHeights["projects"]}
                tooltipText={"Skills"} 
            />
            <VertScrollButton 
                sectionAnchor={sectionAnchors["projects"]}             
                startHeight={sectionHeights["projects"]} 
                endHeight={sectionHeights["contact"]}
                tooltipText={"Projects"} 
            />
            <VertScrollButton 
                sectionAnchor={sectionAnchors["contact"]}             
                startHeight={sectionHeights["contact"]} 
                endHeight={sectionHeights["end"]}
                tooltipText={"Contact"} 
            />
        </div>
    )
}

export default VertScrollMenu;