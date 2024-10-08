// Vendor imports
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

// Local imports
import "../../assets/css/skills/skills.css";
import skillsData from "../../data/skills.json";
import SkillIcon from "./SkillIcon";
import { HeightRefContext } from "../../context/Contexts";
import { useContext } from "react";

function Skills() {
    // Get "ref" to attach to skills section for tracking element height
    const setSkillsRef = useContext(HeightRefContext)["skills"];

    // Read data from skills JSON
    const techSkills = skillsData["technologies"];
    const toolSkills = skillsData["otherTools"];
    const libSkills = skillsData["libFrameworks"];

    // Map data to skill icon components
    const techIcons = techSkills.map((skill, index) => {
        return <SkillIcon key={index} name={skill.name} imgPath={skill.imgPath} />
    });
    const toolIcons = toolSkills.map((skill, index) => {
        return <SkillIcon key={index} name={skill.name} imgPath={skill.imgPath} />
    });
    const libIcons = libSkills.map((skill, index) => {
        return <SkillIcon key={index} name={skill.name} imgPath={skill.imgPath} />
    });

    return(
        <div ref={newRef => {setSkillsRef(newRef)}} id="skills-background">
            <Container className="section-wrapper section-content" id="skills-wrapper">
                <Row className="">
                    <div id="skills-heading">
                        <span>My Tech Stack</span>
                    </div>
                </Row>
                <Row id="row-skills-1">
                    <div className="skills-content" id="content-tech">
                        <span className="skills-sheading">Technologies</span>
                        <div className="skills-icon-row">
                            {techIcons}
                        </div>
                    </div>
                </Row>
                <Row id="row-skills-2">
                    <Col>
                        <div className="skills-content" id="content-tools">
                            <span className="skills-sheading">Other Tools</span>
                            <div className="skills-icon-row">
                                {toolIcons}
                            </div>
                        </div>
                    </Col>
                    <Col lg="7">
                        <div className="skills-content" id="content-libraries">
                            <span className="skills-sheading">Libraries/Frameworks</span>
                            <div className="skills-icon-row">
                                {libIcons}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills;