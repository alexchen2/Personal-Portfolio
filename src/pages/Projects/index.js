// Vendor imports
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";

// Local imports
import PrimaryBtn from "../../components/ui/PrimaryBtn";
import "../../assets/css/projects/projects.css";
import GithubIcon from "../../assets/vendor/img/skills/github.png";
import GoToIcon from "../../assets/vendor/img/projects/go-to.png";
import FigmaIcon from "../../assets/vendor/img/skills/figma.png";
import projectsData from "../../data/projects.json";
import { useContext } from "react";
import HeightRefContext from "../../hooks/HeightRefContext";

function ProjectSkillTag({ skillName }) {
    return(
        <div className="ptag-box">
            <span className="ptag-text">{ skillName }</span>
        </div>
    )
}

function ProjectCapsule({ projectData }) {
    const skillTags = projectData["tags"].map((skillName, index) => <ProjectSkillTag key={index} skillName={skillName} />);
    let goToBtn = <></>;

    if (projectData["demoLink"] != null) {
        goToBtn = <PrimaryBtn text={projectData["demoLink"][0]} link={projectData["demoLink"][1]} iconPath={GoToIcon} />
    }
    return (
        <div className="pcapsule-box">
            <div className="pcapsule-wrapper">
                <div className="pcapsule-info">
                    <div className="pcapsule-text">
                        <span className="pcapsule-heading">{projectData["name"]}</span>
                        <span className="pcapsule-body">{projectData["description"]}</span>
                    </div>
                    <div className="pcapsule-skill-row">
                        { skillTags }
                    </div>
                    <div className="pcapsule-btn-row">
                        <PrimaryBtn text={"Github Repo"} link={projectData["githubRepo"]} iconPath={GithubIcon} />
                        { goToBtn }
                    </div>
                </div>
                <div className="pcapsule-img">
                    <a href={projectData["figmaLink"]}>
                        <div className="pcapsule-img-wrapper">
                            <img src={projectData["previewImgPath"]} alt="" />
                            <div className="pcapsule-img-bg" id="pcapsule-img-bg-1"></div>
                            <div className="pcapsule-img-bg" id="pcapsule-img-bg-2"></div>
                            <div className="pcapsule-img-figma">
                                <img src={FigmaIcon} alt="" />
                                <span>Open in Figma</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

function Projects({ parallax }) {
    const setProjectsRef = useContext(HeightRefContext)["projects"];

    const projectCapsules = projectsData.map((projectData, index) => {
        return <ProjectCapsule key={index} projectData={projectData} />
    })

    return(
        <div ref={newRef => { setProjectsRef(newRef) }} id="projects-background">
            <Container className="section-wrapper section-content" id="projects-wrapper">
                <div id="projects-heading">
                    <span>Featured Projects</span>
                </div>
                <div id="projects-content">
                    { projectCapsules }
                </div>
            </Container>
        </div>
    )
}

export default Projects;