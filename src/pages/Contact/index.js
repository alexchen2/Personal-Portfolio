import { Container } from "react-bootstrap";
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import "../../assets/css/contact/contact.css";
import { useContext } from "react";
import { HeightRefContext } from "../../context/Contexts";

function Contact() {
    const setContactRef = useContext(HeightRefContext)["contact"];

    return (
        <div ref={newRef => {setContactRef(newRef)}} id="contact-background">
            <Container className="section-wrapper section-content" id="contact-wrapper">
                <div id="contact-heading">
                    <span id="contact-mheading">
                        Want to get in touch?
                    </span>
                    <span id="contact-sheading">
                        Have any proposals or questions?<br />
                        I’m one click away!
                    </span>
                </div>
                <div id="contact-email-btn">
                    <PrimaryBtn 
                        text={ "Send me a Message" } 
                        link="mailto:achenforyou@gmail.com"
                    />
                </div>
            </Container>
        </div>
    )
}

export default Contact;