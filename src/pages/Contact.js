import NavbarComponent from "../components/front/NavbarComponent";
import "../assets/front/css/index.css";
import FooterComponent from "../components/front/FooterComponent";
import contact_header from "../assets/front/img/contact_header.PNG";
import { Link } from "react-router-dom";
import { authFormValidation } from "../helpers/concateValidation";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Contact = () => {
    const [commentState, SetCommentState] = useState({
        name: "",
        email: "",
        body: "",
    });
    const [errors, setErrors] = useState({ name: "", email: "", body: "" });
    const history = useHistory();
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(commentState);
        if (
            authFormValidation(
                commentState.name,
                commentState.email,
                commentState.body,
                setErrors
            )
        ) {
            try {
                const added = await axios.post(
                    `${process.env.REACT_APP_API_URL}/mail`,
                    commentState,
                    {
                        "Content-Type": "multipart/form-data",
                    }
                );
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className="index-wrapper">
            <NavbarComponent />
            {/*  contact   */}
            <div
                className="contact"
                style={{
                    backgroundImage: `url(${contact_header})`,
                    marginTop: "-30px",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>CONTACT US</h2>
                                <div className="breadcrumb__links">
                                    <Link to="/">Home</Link>
                                    <span style={{ color: "white" }}>|</span>
                                    <Link to="aboutUs">ABOUT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  location  */}
            <div className="container-fluid">
                <div className="row-">
                    <div className="col-lg-12">
                        <div className=" contact__map mt-5 ">
                            <iframe
                                width="600"
                                height="500"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=mansoura&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                style={{
                                    marginLeft: "5%",
                                    border: "0",
                                    width: "90%",
                                }}
                            ></iframe>

                            <br />
                            {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
                                <a href="https://www.embedgooglemap.net">google map embed responsive</a>
                                <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
                        </div>
                    </div>
                </div>
            </div>
            {/*  contact form  */}
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
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__widget">
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Address</h4>
                                    <p>
                                        160 Pennsylvania Ave NW, Washington,
                                        Castle, PA 16101-5161
                                    </p>
                                </div>
                            </div>
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Phone</h4>
                                    <p>01028765490 | 01028765498</p>
                                </div>
                            </div>
                            <div className="contact__widget__item">
                                <div className="contact__widget__item__icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact__widget__item__text">
                                    <h4>Support</h4>
                                    <p>fix.support@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="contact__form">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputname"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <div className="input-group-prepend">
                                        <span
                                            className={`input-group ${
                                                errors.name !== "" &&
                                                errors.name !== "valid"
                                                    ? "border-danger"
                                                    : ""
                                            }`}
                                        ></span>
                                    </div>
                                    <input
                                        type="text"
                                        className={`form-control  ${
                                            errors.name !== "" &&
                                            errors.name !== "valid"
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="exampleInputname"
                                        aria-describedby="emailHelp"
                                        name="name"
                                        onChange={(e) =>
                                            SetCommentState({
                                                ...commentState,
                                                name: e.target.value,
                                            })
                                        }
                                        value={commentState.name}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name !== "" &&
                                    errors.name !== "valid" ? (
                                        <h6 className="invalid-feedback">
                                            {errors.name}
                                        </h6>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="input-group-prepend">
                                        <span
                                            className={`input-group ${
                                                errors.email !== "" &&
                                                errors.email !== "valid"
                                                    ? "border-danger"
                                                    : ""
                                            }`}
                                        ></span>
                                    </div>
                                    <input
                                        type="email"
                                        className={`form-control  ${
                                            errors.email !== "" &&
                                            errors.email !== "valid"
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        onChange={(e) =>
                                            SetCommentState({
                                                ...commentState,
                                                email: e.target.value,
                                            })
                                        }
                                        value={commentState.email}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email !== "" &&
                                    errors.email !== "valid" ? (
                                        <h6 className="invalid-feedback">
                                            {errors.email}
                                        </h6>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputTextArea"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="input-group-prepend">
                                        <span
                                            className={`input-group ${
                                                errors.body !== "" &&
                                                errors.body !== "valid"
                                                    ? "border-danger"
                                                    : ""
                                            }`}
                                        ></span>
                                    </div>
                                    <textarea
                                        rows="3"
                                        className={`form-control  ${
                                            errors.body !== "" &&
                                            errors.body !== "valid"
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="exampleInputTextArea"
                                        aria-describedby="emailHelp"
                                        name="body"
                                        onChange={(e) =>
                                            SetCommentState({
                                                ...commentState,
                                                body: e.target.value,
                                            })
                                        }
                                        value={commentState.body}
                                        placeholder="Enter your comment"
                                    >
                                        {" "}
                                    </textarea>

                                    {errors.body !== "" &&
                                    errors.body !== "valid" ? (
                                        <h6 className="invalid-feedback">
                                            {errors.body}
                                        </h6>
                                    ) : null}
                                </div>

                                <button type="submit" className="site-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer section  */}
            <FooterComponent />
        </div>
    );
};

export default Contact;
