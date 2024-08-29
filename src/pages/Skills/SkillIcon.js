import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import "../../assets/css/skills/skillIcon.css";

// Tooltip code taken from "https://mui.com/material-ui/react-tooltip/"
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

function SkillIcon({ name, imgPath }) {
    return (
        <BootstrapTooltip title={name}>
            <div className="skill-icon">
                <img src={imgPath} alt="" />
            </div>
        </BootstrapTooltip>
    )
}

export default SkillIcon;