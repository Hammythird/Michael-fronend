import React , {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/scss/home.scss';
import firstimage from '../assets/images/firstimage.jpg';
import secondimage from '../assets/images/secondimage.jpg';

const Topnav = () => {
    
}
const Home = () => {


    return (
        <div className="home">
            <Header />
            <nav>       
                <ul className="main-nav">
                    <li><a href="#">JOb seekers</a></li>
                    <li><a href="#">Employers</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </nav>
            <main> 
                <section className="job-search">
                    <div>
                        <h3>Job search</h3>
                        <p>Search for job at UK' biggest brands.</p>
                    </div>
                    <div className="search">
                            <input type="text" placeholder="job title"/>
                            <input type="text" placeholder="region, city"/>
                            <select>
                                <option value="10">$10</option>
                            </select>
                            <select>
                                <option value="200">$200</option>
                            </select>
                            <button>Search</button>
                    </div>
                </section>
                <section>
                    <div className="job-by-items">
                        <div>
                            <h4>Search jobs by</h4>
                        </div>
                            <ul>
                                <li><a href="">Job title</a></li>
                                <li><a href="">Location</a></li>
                                <li><a href="">Industry</a></li>
                                <li><a href="">Sector</a></li>
                            </ul>
                    </div>
                </section>
                <section>
                    <div className="popular-job-titles">
                        <div>
                            <h3><i></i>
                                Popular Job Titles</h3>
                        </div>
                        <div className="job-list">
                            <ul>
                                <li><a href="#">Account Manager</a></li>
                                <li><a href="#">Area Manager</a></li>
                                <li><a href="#">CFO Developer</a></li>
                                <li><a href="#">Facilities Manager</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Financial Controller</a></li>
                                <li><a href="#">Management Accountant</a></li>
                                <li><a href="#">Marketing Executive</a></li>
                                <li><a href="#">Operations Manager</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Product Manager</a></li>
                                <li><a href="#">Sales Manager</a></li>
                                <li><a href="#">Support Worker</a></li>
                                <li><a href="#">Accountant</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="new-opportunity">
                        <h3>Looking a new opportunity?</h3>
                        <p>Being in a job that does not utilise your skills can be a waste of your time and your employer's and is unlikely to lead to long term job satisfaction.
                             Take some time to consider your skill-set and how you like to work; 
                            think about tasks you have enjoyed or excelled at in the past 
                            and determine why that was so.
                            By identifying what you are good at and 
                            what you enjoy you can target roles where you will be able 
                            to put these skills to work.</p><br />
                            <p>Click on any of the links on this page to search for jobs by Industry, Sector, Location or by job title. If you don't find the exact job you are looking for then set up an alert to receive jobs as and when they become available.</p>
                    </div>
                </section>
                <section>
                    <div className="popular-job-titles">
                        <div>
                            <h3><i></i>
                                Jobs by Location</h3>
                        </div>
                        <div className="job-list">
                            <ul>
                                <li><a href="#">Jobs in London</a></li>
                                <li><a href="#">Jobs in Peterborough</a></li>
                                <li><a href="#">Jobs in St Albans</a></li>
                                <li><a href="#">Jobs in Nottingham</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Jobs in Chesterfield</a></li>
                                <li><a href="#">JObs in Darlington</a></li>
                                <li><a href="#">Jobs in Northern Ireland</a></li>
                                <li><a href="#">Jobs in Liverpool</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Jobs in Stockport</a></li>
                                <li><a href="#">Jobs in Glassgow</a></li>
                                <li><a href="#">Jobs in Fife</a></li>
                                <li><a href="#">Jobs in Milton Keynes</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="popular-job-titles">
                        <div>
                            <h3><i></i>
                                Jobs by Indystry</h3>
                        </div>
                        <div className="job-list">
                            <ul>
                                <li><a href="#">Business Services Jobs</a></li>
                                <li><a href="#">Energy & Natural Resources Jobs</a></li>
                                <li><a href="#">FMCG (Fast Moving Consumer Goods)Jobs</a></li>
                                <li><a href="#">Financial SErvices Jobs</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Insurance Jobs</a></li>
                                <li><a href="#">Leisure, Travel & Tourism Jobs</a></li>
                                <li><a href="#">Media & Agency Jobs</a></li>
                                <li><a href="#">Not For Profit Jobs</a></li>
                            </ul>
                            <ul>
                                <li><a href="#">Retail Jobs</a></li>
                                <li><a href="#">Technology & Telecoms Jobs</a></li>
                                <li><a href="#">Transport & Distribution Jobs</a></li>
                                <li><a href="#">Public Sector Jobs</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="popular-job-titles">
                            <div>
                                <h3><i></i>
                                Jobs by Function</h3>
                            </div>
                            <div className="job-list">
                                <ul>
                                    <li><a href="#">Accounting jobs</a></li>
                                    <li><a href="#">Audit & Advisory jobs</a></li>
                                    <li><a href="#">Banking & Financial Services jobs</a></li>
                                    <li><a href="#">Compliance jobsConstruction jobs</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Consultancy, Strategy & Change jobs</a></li>
                                    <li><a href="#">Digital jobs</a></li>
                                    <li><a href="#">Engineering & Manufacturing jobs</a></li>
                                    <li><a href="#">Executive Search jobs</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Facilities Management jobs</a></li>
                                    <li><a href="#">Health, Safety & Environment jobs</a></li>
                                    <li><a href="#">Healthcare jobs</a></li>
                                    <li><a href="#">Hospitality & Leisure jobs</a></li>
                                </ul>
                            </div>
                        </div>
                </section>
                <section>
                    <div className="relative-image">
                        <img src={firstimage} alt="RelativeImage" />
                        <img src={secondimage} alt="RelativeImage" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home;