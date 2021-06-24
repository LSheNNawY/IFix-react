import React from "react";
import { Link } from "react-router-dom";

import ifix1 from "../../assets/front/img/fix1.jpg";
import ifix2 from "../../assets/front/img/fix2.jpg";
import ifix3 from "../../assets/front/img/fix3.jpg";
<style>.hh {{ height: "225px" }}</style>;

export default function ChooseUsComponent() {
    return (
        <>
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
                                <img src={ifix1} height="500px" alt="img" />
                            </div>
                            <div className="col-lg-6">
                                <img
                                    src={ifix2}
                                    style={{ marginBottom: "15px", height: "250px" }}
                                    alt="img"
                                />

                                <img src={ifix3} alt="img" style={{marginTop: "15px",height: "250px"}}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 col-md-6 about__text"
                        style={{ paddingLeft: "50px" }}
                    >
                        <div className="label mt-5">WHY YOU CHOOSE US</div>
                        <span className="choose">Why choose us</span>
                        <h2
                            className="mt-3 mb-3"
                            style={{
                                width: "120px",
                                borderBottom: "3px solid lightgray",
                            }}
                        ></h2>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida lacus vel
                            facilisis.
                        </p>
                        <ul className="chooseUl">
                            <li>
                                <i className="fas fa-check-square"></i>bla bla
                                bla bla bla bla bla
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>bla bla
                                bla bla bla bla bla
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>bla bla
                                bla bla bla bla bla
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>bla bla
                                bla bla bla bla bla
                            </li>
                            <li>
                                <i className="fas fa-check-square"></i>bla bla
                                bla bla bla bla bla
                            </li>
                        </ul>
                        <Link to="/contact" className="primary-btn">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
