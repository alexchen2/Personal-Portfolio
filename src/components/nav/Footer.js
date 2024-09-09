import "../../assets/css/nav/footer.css"

function Footer() {
    return (
        <footer id="footer-background">
            <div id="footer-wrapper">
                <span id="footer-credits">
                    © Alex Chen {(new Date().getFullYear())} | Designed & Developed by Myself
                </span>
            </div>
        </footer>
    )
}

export default Footer;