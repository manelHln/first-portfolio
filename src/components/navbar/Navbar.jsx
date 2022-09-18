import './navbar.css';
import {logo} from "../../assets"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <ul className="navbar__links">
                        <li className='navbar__list'><i className='fa fa-home navbar__icon'></i>Home</li>
                        <li className='navbar__list'><i className='fa fa-user navbar__icon'></i>About</li>
                        <li className='navbar__list'><i className='fa fa-file-code-o navbar__icon'></i>Skills</li>
                        <li className='navbar__list'><i className='fa fa-briefcase navbar__icon'></i>Experience</li>
                        <li className='navbar__list'><i className='fa fa-phone navbar__icon'></i>Contact</li>
                        <li className='navbar__list navbar__list--btn'>Download CV</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;