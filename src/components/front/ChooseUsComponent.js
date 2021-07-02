import React from "react";
import {Link} from "react-router-dom";

import ifix1 from "../../assets/front/img/fix1.jpg";
import ifix2 from "../../assets/front/img/fix2.jpg";
import ifix3 from "../../assets/front/img/fix3.jpg";

<style>.hh {{height: "225px"}}</style>;

export default function ChooseUsComponent() {
    return (
        <div className="index-wrapper">
            <div className="container-fluid">
                <div
                    className="row"
                    style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "50px",
                        marginBottom: "50px",
                        backgroundColor: "white",
                        paddingBottom: "20px",
                    }}
                >
                    <div className="col-lg-6 ">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={ifix1} height="500px" alt="img"/>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img
                                            src={ifix2}
                                            alt="img"
                                            height="250px"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <img src={ifix3} height="250px"
                                             alt="img" style={{marginTop: "15px"}}/>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 about__text"
                        style={{paddingLeft: "50px"}}
                    >
                        <span className="choose mt-5">Why choose us</span>
                        <h2
                            className="mt-3 mb-3"
                            style={{
                                width: "120px",
                                borderBottom: "3px solid lightgray",
                            }}
                        ></h2>
                        <p>
                            We want you to be happy with your repair or installation, and that's why we offer a 100%
                            satisfaction guarantee. If you aren't happy, we'll keep working until you are.
                        </p>
                        <ul className="chooseUl">
                            <li>
                                <i className="fas fa-check-square"></i>
                                Fast and Flexible Service
                            </li>
                            <li>
                                <i className="fas fa-check-square">

                                </i>
                                Guaranteed On-Time Service
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>
                                Transparent Pricing
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>
                                Trusted Technicians
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>
                                We Respect Our Customerss
                            </li>
                        </ul>
                        <Link to="/contact" className="primary-btn">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

