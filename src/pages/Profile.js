import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import ReactStars from "react-rating-stars-component";
import FooterComponent from "../components/front/FooterComponent";
import NavbarComponent from "../components/front/NavbarComponent";

import "../assets/front/css/animate.min.css";
import "../assets/front/css/profile.css";

import empImg from "../assets/front/img/employees/employee1.jpg";
import clientDefaultImg from "../assets/front/img/employees/employee2.jpg";

const Profile = (props) => {
    const [empData, setEmpData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        picture: "",
        dateOfBirth: "",
        profession: {},
        jobs: [],
    });

    const { id } = props.match.params;
    const ajaxGetEmployee = async () => {
        await axios
            .get(process.env.REACT_APP_API_URL + "/employees/" + id)
            .then(({ data }) => {
                setEmpData(data);
                console.log(data)
            });
    };

    useEffect(() => {
        ajaxGetEmployee();
    }, []);

    return (
        <div className="user-profile">
            <NavbarComponent />
            {empData ? (
                <section className="home_banner_area">
                    <div className="container box_1620">
                        <div className="row">
                            <div className="col-lg-6 home_banner_area_image">
                                <img
                                    src={
                                        empData.picture
                                            ? `http://localhost:5000/uploads/users/${empData.picture}`
                                            : empImg
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 home_banner_area_text">
                                <div className="personal_text">
                                    <h6>Hello Everybody, i am</h6>
                                    <h3>
                                        {empData.firstName +
                                            " " +
                                            empData.lastName}
                                    </h3>
                                    <h4>{empData.profession.title}</h4>

                                    <ul className="list basic_info mb-5">
                                        <li>
                                            <a>
                                                <i className="far fa-calendar-alt"></i>{" "}
                                                {dateFormat(
                                                    empData.dateOfBirth,
                                                    "mmmm dS, yyyy"
                                                )}
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a>
                                                <i className="fas fa-phone"></i>{" "}
                                                {empData.phone}
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a>
                                                <i className="fas fa-envelope-square"></i>{" "}
                                                {empData.email}
                                            </a>
                                        </li> */}
                                    </ul>
                                    <Link to={`/order?prof=${empData.profession._id}&emp=${empData._id}`} className="site-btn">
                                        BOOK
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div>Loading ......</div>
            )}
            <section className="review">
                <div className="container">
                    <h1>REVIEWS</h1>
                    {empData.jobs.length > 0 ? (
                        empData.jobs.map((job) => {
                            return (
                                <div className="one__review" key={job._id}>
                                    <div className="reviewer">
                                        <div className="row">
                                            <div className="col-2">
                                                <img
                                                    src={job.client? `http://localhost:5000/uploads/users/${job.client.picture}` : clientDefaultImg}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-6">
                                                <h4>
                                                    {job.client.firstName +
                                                        " " +
                                                        job.client.lastName}
                                                </h4>
                                                <div className="rate">
                                                    {
                                                        <ReactStars
                                                            count={
                                                                job.review.rate
                                                            }
                                                            value={
                                                                job.review.rate
                                                            }
                                                            size={24}
                                                            Color="#ffd700"
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review__content">
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <p>{job.review.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div>No Reviews</div>
                    )}
                </div>
            </section>
            <FooterComponent />
        </div>
    );
};

export default Profile;
