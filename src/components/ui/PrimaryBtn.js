import "../../assets/css/ui/primaryBtn.css"

function PrimaryBtn( { text, link, iconPath } ) {
    let btnImg = <></>;

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