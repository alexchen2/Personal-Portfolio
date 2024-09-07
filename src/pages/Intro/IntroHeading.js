// Vendor imports
import Container from "react-bootstrap/esm/Container";

// Local module imports
import "../../assets/css/intro/intro.css";
import SocialBtn from "../../components/ui/SocialBtn";
import PrimaryBtn from "../../components/ui/PrimaryBtn";

// File imports
import LinkedinImg from "../../assets/vendor/img/intro/linkedin.png";
import GithubImg from "../../assets/vendor/img/intro/github.png";
import DiscordImg from "../../assets/vendor/img/intro/discord.png";
import GmailImg from "../../assets/vendor/img/intro/gmail.png";
import ResumeIcon from "../../assets/vendor/img/intro/resume-icon.png";
import ResumeFile from "../../assets/vendor/docs/Resume_Alex_Chen.pdf";

function IntroHeading() {
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/alex-chen1",
        github: "https://github.com/alexchen2",
        discord: "https://discordapp.com/users/473695030578511883",
        email: "mailto:achenforyou@gmail.com"
    }

    let socialImgPaths = {
        linkedin: LinkedinImg,
        github: GithubImg,
        discord: DiscordImg,
        email: GmailImg
    }

    return (
        <Container>
            <div id="intro-heading">
                <span id="intro-mheading">
                    Alex Chen
                </span>
                <span id="intro-sheading">
                    Web developer & ML enthusiast
                </span>
            </div>
            <div className="socials-row">
                <SocialBtn 
                    link={ socialLinks["linkedin"] } 
                    imgPath={ socialImgPaths["linkedin"] } 
                />
                <SocialBtn 
                    link={ socialLinks["github"] } 
                    imgPath={ socialImgPaths["github"] } 
                />
                <SocialBtn 
                    link={ socialLinks["discord"] } 
                    imgPath={ socialImgPaths["discord"] } 
                />
                <SocialBtn 
                    link={ socialLinks["email"] } 
                    imgPath={ socialImgPaths["email"] } 
                />                                
            </div>
            <div id="intro-resume-btn">
                <PrimaryBtn 
                    text={ "Check out my Resume" } 
                    link={ ResumeFile } 
                    iconPath={ ResumeIcon } 
                />
            </div>
        </Container>
    )
}

export default IntroHeading;