import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import { ToastContainer } from "react-toastify";
import { notify } from "../helpers/generalFunctions";

import "react-toastify/dist/ReactToastify.css";

import "../assets/front/css/index.css";

const PasswordReset = () => {
    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    const [restPasswordMsg, setRestPasswordMsg] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState({});

    const [loading, setLoading] = useState(true);
    const [successMsg, setSuccessMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};
        setErrors({});

        if (!password || password.length < 6) {
            validationErrors.password =
                "Password must not be less than 6 characters";
        }

        if (passwordConfirmation !== password) {
            validationErrors.passwordConfirmation =
                "Passwords are not identical";
        }

        setErrors(validationErrors);

        if (JSON.stringify(validationErrors) === "{}") {
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/password-reset`,
                    { password, email }
                )
                .then(({ data }) => {
                    setSuccessMsg(true);
                    notify(
                        "💥 Success, password has been reset",
                        "success",
                        history,
                        "/"
                    );
                })
                .catch((error) => {
                    setSuccessMsg(true);
                    notify(
                        "💥 Error, please try again later",
                        "error",
                        history,
                        "/"
                    );
                });
        }
    };

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/check-reset-token?email=${email}&token=${token}`
            )
            .then(({ data }) => {
                setLoading(false);
                setRestPasswordMsg(true);
            })
            .catch(({ response }) => {
                setLoading(false);
                setSuccessMsg(true);
                notify(
                    "💥 Error, Please, try again later",
                    "error",
                    history,
                    "/"
                );
            });
    }, []);

    return (
        <div className="index-wrapper">
            <NavbarComponent />
            {successMsg ? <ToastContainer /> : null}
            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Password Reset</h2>
                                <div className="breadcrumb__links"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ minHeight: "400px" }}>
                <div
                    className="row"
                    style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "50PX",
                        marginBottom: "50px",
                    }}
                >
                    <div className="col-md-6 mx-auto">
                        {loading ? (
                            <h2 className="text-center">Loading....</h2>
                        ) : null}
                        {restPasswordMsg ? (
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="password"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="input-group-prepend">
                                        <span
                                            className={`input-group ${
                                                errors.password ? "border-danger"
                                                    : ""
                                            }`}
                                        ></span>
                                    </div>
                                    <input
                                        type="password"
                                        className={`form-control  ${
                                            errors.password ? "is-invalid"
                                                : ""
                                        }`}
                                        id="password"
                                        aria-describedby="passwordHelp"
                                        name="password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        value={password}
                                        placeholder="New Password"
                                    />
                                    {errors.password ? (
                                        <h6 className="invalid-feedback">
                                            {errors.password}
                                        </h6>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="passwordConfirmation"
                                        className="form-label"
                                    >
                                        Password Confirmation
                                    </label>
                                    <div className="input-group-prepend">
                                        <span
                                            className={`input-group ${
                                                errors.passwordConfirmation? "border-danger"
                                                    : ""
                                            }`}
                                        ></span>
                                    </div>
                                    <input
                                        type="password"
                                        className={`form-control  ${
                                            errors.passwordConfirmation? "is-invalid"
                                                : ""
                                        }`}
                                        id="passwordConfirmation"
                                        aria-describedby="passwordHelp"
                                        name="passwordConfirmation"
                                        onChange={(e) =>
                                            setPasswordConfirmation(
                                                e.target.value
                                            )
                                        }
                                        value={passwordConfirmation}
                                        placeholder="Confirm password"
                                    />
                                    {errors.passwordConfirmation ? (
                                        <h6 className="invalid-feedback">
                                            {errors.passwordConfirmation}
                                        </h6>
                                    ) : null}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary mb-3 site-btn btn-block"
                                >
                                    Rest
                                </button>
                            </form>
                        ) : (
                            <>
                                <h2>Error Occurred, please try again later</h2>
                            </>
                        )}
                    </div>
                </div>
                <div
                    className="row "
                    style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginTop: "50PX",
                        marginBottom: "50px",
                    }}
                ></div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default PasswordReset;
