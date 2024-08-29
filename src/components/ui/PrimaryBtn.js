import "../../assets/css/ui/primaryBtn.css"

function PrimaryBtn( { text, link, iconPath } ) {
    return(
        <a href={ link }>
            <div className="btn-wrapper">
                <img 
                    className="btn-icon"
                    src={iconPath} 
                    alt="" 
                />
                <span className="btn-text">{ text }</span>
            </div>
        </a>
    )
}

export default PrimaryBtn;