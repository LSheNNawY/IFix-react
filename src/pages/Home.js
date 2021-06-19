import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import ProfessionComponent from "../components/front/ProfessionComponent";
import FooterComponent from "../components/front/FooterComponent";

import "../assets/front/css/index.css";
// import "../assets/front/css/animate.min.css";

import carosel from "../assets/front/img/carasoul/carasoul1.jpg";
import carosel2 from "../assets/front/img/carasoul/ca.jpg";
import ifix1 from "../assets/front/img/fix1.jpg";
import ifix2 from "../assets/front/img/fix2.jpg";
import ifix3 from "../assets/front/img/fix3.jpg";

import emp1Img from "../assets/front/img/employees/employee1.jpg";

const ajaxGetProfessions = async (professionsNum = "3") => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/professions?professions=${professionsNum}`
    );
};

const getEmployeesByProfessionIds = async (professionsIds) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}/employees?professionsIds=${professionsIds}`
    );
};

const Home = () => {
    const [professions, setProfessions] = useState([]);
    const [employees, setsetEmployees] = useState([]);
    const sliderText = "We Provide Best Fix Services";

    useEffect(() => {
        ajaxGetProfessions(3).then(({ data }) => {
            setProfessions(data);
            let profIds = "";
            data.forEach(profession => {
                console.log(profession);
            })
            getEmployeesByProfessionIds(profIds).then(({ data }) => {
                console.log(data);
            });
        });
    }, []);
    return (
        <div className="index-wrapper">
            <NavbarComponent />
            {/* carousel  */}
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={carosel}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="hero__text">
                                <span className=" animate__animated animate__fadeInLeft">
                                    Best fix
                                </span>
                                <h2>{sliderText}</h2>
                                <Link to={"/contact"} className="primary-btn">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src={carosel2}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="hero__text">
                                <span>Best fix</span>
                                <h2>{sliderText}</h2>
                                <Link to={"contact"} className="primary-btn">
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={carosel}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <div className="hero__text">
                                <span>Best fix</span>
                                <h2>{sliderText}</h2>
                                <a href="contact.html" className="primary-btn">
                                    Contact us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            {/* services */}
            <div className="team services">
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
                        <div className="col-12 text-center">
                            <p className="label ">OUR SERVICES</p>
                            <h2>SERVICES WE OFFER</h2>
                            <h2
                                className="mt-3 mb-3"
                                style={{
                                    width: "120px",
                                    borderBottom: "3px solid lightgray",
                                    marginLeft: "45%",
                                }}
                            ></h2>
                            <div className="row">
                                {professions.map((profession) => (
                                    <ProfessionComponent
                                        profession={profession}
                                        key={profession._id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* why u choose us */}
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
                                    height="225px"
                                    style={{ marginBottom: "50px" }}
                                    alt="img"
                                />

                                <img src={ifix3} height="225px" alt="img" />
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
                        <a href="contact.html" className="primary-btn">
                            Contact us
                        </a>
                    </div>
                </div>
            </div>

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
                                <div className="col-lg-3 col-md-6">
                                    <Link to={`profile`}>
                                        <img src={emp1Img} alt="img" />
                                    </Link>
                                    <div className="team__item__text">
                                        <Link to={`profile`}>
                                            <h4>Employee Name</h4>
                                        </Link>
                                        <div className="rate">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* get a service */}
            <section className="ourServices">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="ourServices__text">
                                <h2>
                                    We Offer Fast, Professional &amp;
                                    Exceptional Services
                                </h2>
                                <a href="#" className="primary-btn">
                                    Get a services
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="ourServices__pic set-bg"
                    data-setbg="img/callto-right.jpg"
                ></div>
            </section>

            <FooterComponent />
        </div>
    );
};

export default Home;
