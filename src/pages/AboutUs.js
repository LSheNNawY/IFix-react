import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/front/NavbarComponent";
import { Link } from "react-router-dom";

import "../assets/front/css/index.css";
import "../assets/front/css/about.css";
import "../assets/front/css/animate.min.css";

import about from "../assets/front/img/about.PNG";
import fix1 from "../assets/front/img/fix1.jpg"
import fix2 from "../assets/front/img/fix2.jpg"
import fix3 from "../assets/front/img/fix3.jpg"

import FooterComponent from "../components/front/FooterComponent";
import ChooseUsComponent from "../components/front/ChooseUsComponent";

const AboutUs = (props) => {
    return (
        <div className="index-wrapper">
            <NavbarComponent />
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>About US</h2>
                                <div className="breadcrumb__links">
                                    <a href="">Home</a>
                                    <span style={{color: "white"}}>|</span>
                                    <a href="">contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid">

                <div className="row " style={{width: "90%", marginLeft:"5%" , marginTop: "50PX"}}>
                    <div className="col-lg-6 col-md-6 about__text">
                        <div className="label">Welcome To IFix</div>
                        <h2><span>We provide services</span> for multiple customers in various industries and segments
                        </h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis
                            ipsum suspendisse ultrices gravida lacus vel facilisis.
                        </p>
                        <a href="" className="primary-btn">Contact us</a>
                    </div>
                    <div className="col-lg-6 col-md-6">

                        <div className="about__video set-bg" style={{ backgroundImage: 'url(' + about + ')'}}>
                            <a href="https://www.youtube.com/watch?v=0AlYkJwy9Qk" className="play-btn video-popup"><i
                                className="fa fa-play"></i></a>
                        </div>


                    </div>
                </div>



                <div className="row"
                     style={{width: "90%", marginLeft:"5%" , marginTop: "50PX", marginBottom: "50px", backgroundColor: "white",paddingBottom: "20px"}}>

                    <div className="col-lg-6 ">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={fix1} style={{height:"500px"}}/>
                            </div>
                            <div className="col-lg-6">
                                <img src={fix2} height="225px" style={{marginBottom: "50px"}}/>

                                    <img src={fix3} height="225px"/>

                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 about__text" style={{paddingLeft: "50px"}}>
                        <div className="label  mt-5">WHY CHOOSE US</div>
                        <span className="choose">Why choose us</span>
                        <h2 className="mt-3 mb-3" style={{width: "120px",borderBottom: "3px solid lightgray"}}></h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida lacus vel facilisis.
                        </p>
                        <ul className="chooseUl">
                            <li><i class="fas fa-check-square"></i>bla bla bla bla bla bla bla</li>
                            <li><i class="fas fa-check-square"></i>bla bla bla bla bla bla bla</li>
                            <li><i class="fas fa-check-square"></i>bla bla bla bla bla bla bla</li>
                            <li><i class="fas fa-check-square"></i>bla bla bla bla bla bla bla</li>
                            <li><i class="fas fa-check-square"></i>bla bla bla bla bla bla bla</li>

                        </ul>
                        <a href="" className="primary-btn">Contact us</a>
                    </div>
                </div>
            </div>


            <div className="counter">
                <div className="container-fluid">
                    <div className="row" style={{width: "90%",marginLeft:"5%",marginTop: "50PX" ,marginBottom: "50px"}}>
                        <div className="col-md-6 content">
                            <i className="fas fa-users"></i>
                            <div className="counter__item__num">
                                <h2 className="count">25</h2>
                                <span>k+</span>
                                <p>Happy Customers</p>
                            </div>

                        </div>
                        <div className="col-md-6 content">
                            <i className="fas fa-comment-dollar"></i>
                            <div className="counter__item__num">
                                <h2 className="count">28</h2>
                                <span>k+</span>
                                <p>Project Complete</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FooterComponent />
        </div>
    )

};

export default AboutUs;