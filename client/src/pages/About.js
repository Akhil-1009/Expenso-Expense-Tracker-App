import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutus from '../assets/aboutus.jpg';
import NavBar from '../component/NavBar';
import styles from './Aboutus.module.css';
import user from '../assets/akn.png';
// import './AboutMe.module.css'; // Import the modular CSS for AboutMe

const About = () => {
    return (
        <>
            <NavBar />
            <div className="about-us">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className={`col-md-6 ${styles.content}`}>
                            <h1 className="text-primary fw-bold mb-4">About Us</h1>
                            <p className="lead mb-4">
                                Welcome to <span className='fw-bold'>Expenso</span>, where financial empowerment
                                meets simplicity. At <span className='fw-bold'>Expenso</span>, we're on a mission
                                to make managing your expenses a seamless and insightful experience. Our user-friendly
                                interface and innovative features are designed to simplify your financial life,
                                providing you with the tools to track expenses, set budgets, and gain valuable insights
                                effortlessly. Whether you're a financial pro or just starting your journey ,{' '}
                                <span className='fw-bold'>Expenso</span> is your trusted companion on the path to
                                financial wellness. Join us and take control of your finances today.
                            </p>
                            <NavLink to="/contact" className={`btn btn-outline-primary px-3 ${styles.primary}`}>
                                Contact Us
                            </NavLink>
                        </div>
                        <div className="col-md-5 d-flex  ">
                            <img className='m-5' src={aboutus} alt="About Us" height="400px" width="600px" />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="about-me">
                <div className="container py-5 my-5">
                    <div className="row">
                        <div className={`col-md-6 d-flex justify-content-center  ${styles.content}`}>
                            <img
                                // className='rounded-circle img-fluid ml-3'
                                src={user} // Replace with your photo URL
                                alt="About Me"
                                height="300px"
                                width="300px"
                                // className='mr-4'
                            />
                        </div>
                        <div className={`col-md-5 ${styles.content}`}>
                            <h1 className="text-primary fw-bold mb-4">About Me</h1>
                            <p className="lead mb-4">
                                Hi, I'm Akhil Suryawanshi, the creator behind <span className='fw-bold'>Expenso</span>. I am a full stack Web developer
                                With a deep passion for crafting intuitive solutions, Expenso is more than just a project it's a commitment to empowering individuals in their financial endeavors. I believe that understanding and controlling one's finances should be accessible to everyone, and that's precisely what Expenso aims to achieve.
    

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
