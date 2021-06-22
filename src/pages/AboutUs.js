import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/front/NavbarComponent";
import {Link} from "react-router-dom";

import "../assets/front/css/index.css";
import "../assets/front/css/about.css";
import "../assets/front/css/animate.min.css";

import about from "../assets/front/img/about.PNG";
import fix1 from "../assets/front/img/fix1.jpg"
import fix2 from "../assets/front/img/fix2.jpg"
import fix3 from "../assets/front/img/fix3.jpg"

import FooterComponent from "../components/front/FooterComponent";
import ChooseUsComponent from "../components/front/ChooseUsComponent";
import Employee from "../components/front/EmployeeComponent";
import axios from "axios";
const ajaxGetProfessions = async (professionsNum = "3") => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/professions?professions=${professionsNum}`
    );
};
const AboutUs = (props) => {

    const [professions, setProfessions] = useState([]);
    const [employees, setEmployees] = useState([]);
    const sliderText = "We Provide Best Fix Services";

    useEffect(() => {
        ajaxGetProfessions(3).then(({ data }) => {
            setProfessions(data);
            let emps = [];
            data.forEach((profession) => {
                if (profession.employees.length>0) {
                    emps.push(profession.employees[0]);
                }
            });

            setEmployees(emps);
        });
    }, []);
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
                                    <Link to="/">Home</Link>
                                    <span style={{color: "white"}}>|</span>
                                    <Link to="/contact">contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <ChooseUsComponent />
            {/* small insights */}
            <div className="counter">
                <div className="container-fluid">
                    <div
                        className="row"
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginTop: "50px",
                            marginBottom: "50px",
                        }}
                    >
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



            {/* team */}
            <div
                className="team"
                style={{
                    position: "relative",
                    bottom: "210px",
                }}
            >
                <div className="container-fluid">
                    <div
                        className="row "
                        style={{
                            width: "90%",
                            marginLeft: "5%",
                            marginTop: "50px",
                            marginBottom: "50px",
                        }}
                    >
                        <div className="col-12 text-center">
                            <p className="label ">TOP RATED</p>
                            <h2>Meet our TOP RATED</h2>
                            <h2
                                className="mt-3 mb-3"
                                style={{
                                    width: "120px",
                                    borderBottom: "3px solid lightgray",
                                    marginLeft: "45%",
                                }}
                            ></h2>
                            <div
                                className="row"
                                style={{
                                    marginTop: "30px",
                                }}
                            >
                                {employees.length>0 &&
                                employees.map((employee) => (
                                    <Employee
                                        employee={employee}
                                        key={employee._id}
                                    />
                                ))}



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