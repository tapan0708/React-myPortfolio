import Sidebar from "../Sidebar/Sidebar"
import "./Header.scss"

function Header() {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <span>Portfolio</span>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/tapan-vyas-a47b101b1/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedIn.svg" alt="youtube" className="scale-img" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="facebook" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="instagram" />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" alt="youtube" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header