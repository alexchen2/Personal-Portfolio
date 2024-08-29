// Local imports
import Container from "react-bootstrap/esm/Container";
import "../../assets/css/projects/projects.css";

function ProjectCapsule() {

}

function Projects({ parallax }) {
    return(
        <div id="projects-background">
            <Container className="section-wrapper section-content" id="projects-wrapper">
                <div id="projects-heading">
                    <span>Featured Projects</span>
                </div>
                <div id="projects-content">
                    {/* TODO: Insert projects panel dynamically, based off of data in projects.json */}
                </div>
            </Container>
        </div>
    )
}

export default Projects;