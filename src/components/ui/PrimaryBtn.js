// PrimaryBtn.js - component for generic rectangular green buttons used throughout the document
import "../../assets/css/ui/primaryBtn.css"

function PrimaryBtn( { text, link, iconPath } ) {
    let btnImg = <></>;

    // Handling case where a button img path is provided alongside button data
    if (iconPath != null) {
        btnImg = <img className="btn-icon" src={iconPath} alt="" />
    }  

    return(
        <a href={ link } className="btn-link">
            <div className="btn-wrapper">
                { btnImg }
                <span className="btn-text">{ text }</span>
            </div>
        </a>
    )
}

export default PrimaryBtn;