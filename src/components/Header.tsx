import React, {useState} from 'react';
import logo from '../assets/images/logo.png';
import '../assets/scss/header.scss';
const Header = () => {

const [active,setActive] = useState('nav-menu');
const [mainactive, setnavActive] = useState('main-menu');
const [navtoggleIcon, settoggleActive] = useState('main-toggle');
const [toggleIcon, setToggleIcon] = useState("nav_toggler");
const navHeaderToggle = () => {
    active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu');
    navtoggleIcon === 'main-toggle' ? settoggleActive('main-toggle toggle-state') : settoggleActive('main-toggle');
}
const navToggle = () => {
    mainactive === 'main-menu' ? setnavActive('main-menu main-menu-active') : setnavActive('main-menu');
    //ToggleIcon

    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler');
}
    return(
        <header>
                <nav>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    {/* <div onClick={navHeaderToggle} className={navtoggleIcon}>
                        <a href="#"><i className='fa fa-cloud'/></a>
                    </div> */}
                    <div onClick = {navToggle} className={toggleIcon}>
                        <div className="line1"/>
                        <div className="line2"/>
                        <div className="line3"/>
                    </div>
                    <ul className={active}>
                        <li>
                            <a href="#">
                                <i className='fa fa-cloud'></i>
                                <span>Accessibility Tools</span></a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='fa fa-cloud'></i>
                                <span>Job Search</span></a>
                        </li>
                        <li>
                            <a href="#">
                                <i className='fa fa-cloud'/>
                                <span></span>
                                Save jobs
                            </a>
                        </li>
                        <li>
                            <a href="#"><i className='fa fa-cloud'></i>Register/Sign in</a>
                        </li>
                    </ul>
                    <ul className={mainactive}>
                        <li><a href=""><i className='fa fa-cloud'></i>JOb seekers</a></li>
                        <li><a href=""><i className='fa fa-cloud'></i>Employers</a></li>
                        <li><a href=""><i className='fa fa-cloud'></i>About</a></li>
                        <li><a href=""><i className='fa fa-cloud'></i>Contact</a></li>
                    </ul>
                    
                </nav>
        </header>
    )
} 

export default Header;