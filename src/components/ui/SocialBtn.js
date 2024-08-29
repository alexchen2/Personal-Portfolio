import "./../../assets/css/ui/socialBtn.css";

function SocialBtn({ link, imgPath }) {
    return(
        <a href={link}>
            <div className="social-btn">
                <img 
                    className="social-img" 
                    src={imgPath} 
                    alt=""
                />
            </div>
        </a>
    )
}

export default SocialBtn;