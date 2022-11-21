import React from "react";
import '../assets/scss/footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className="simplenation">
                <div>
                    <div>
                        <h4>Genesral</h4>
                        <ul>
                            <li><a href="#">GeneralSite map</a></li>
                            <li><a href="#">Site terms </a></li>
                            <li><a href="#">Work for us</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Diversity & Inclusion</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>About Michael page</h4>
                        <ul>
                            <li><a href="#">Employee rights</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Complaints policy</a></li>
                            <li><a href="#">Modern Slavery Statement</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="search-for-jobs">
                    <div>
                        <h4>Search for jobs</h4>
                    </div>
                    <div className="search-joblists">
                        <div >
                            <ul>
                                <li><a href="#">Healthcare</a></li>
                                <li><a href="#">Accounting</a></li>
                                <li><a href="#">Audit & Advisory</a></li>
                                <li><a href="#">Banking & Financial Services</a></li>
                                <li><a href="#">Compliance</a></li>
                                <li><a href="#">Construction</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">Consultancy, Strategy & Change</a></li>
                                <li><a href="#">Digital</a></li>
                                <li><a href="#">Engineering & Manufacturing</a></li>
                                <li><a href="#">Executive Search</a></li>
                                <li><a href="#">Facilities Management</a></li>
                                <li><a href="#">Health, Safety & Environment</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cooking-button">
                        <h4>Cooking settings</h4>
                        <button>Cooking settings</button>
                    </div>
                </div>
                <div className="relative-app">

                </div>
            </div>
            {/* <div className="bottom-note">
                <p>Michael Page is part of the PageGroup.
                     Michael Page is a trading name of
                      Michael Page International 
                      Recruitment Limited. 
                      Registered in England No.
                       04130921 Registered Office: 
                       200 Dashwood Lang Road,
                        Bourne Business Park,
                         Addlestone, Surrey, KT15 2NX</p>
            </div> */}
        </footer>
    )
}

export default Footer;