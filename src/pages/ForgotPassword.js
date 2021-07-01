import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import UserContext from "../context/UserContext";
import { ToastContainer } from "react-toastify";
import { notify } from "../helpers/generalFunctions";

import "react-toastify/dist/ReactToastify.css";


import "../assets/front/css/login.scoped.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);

    const { user } = useContext(UserContext);

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        let validEmail = true;

        if (! (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))) {
            validEmail = false;
            setError(true)
        }

        if (validEmail) {
            axios.post(`${process.env.REACT_APP_API_URL}/forgot-password`, {email}).then(({data}) => {
                setSuccessMsg(true);
                notify(
                    "💥 Success, Check you're email to reset password",
                    "success",
                    history,
                    "/"
                );
            }).catch(({response}) => {
                setSuccessMsg(true);
                notify(
                    "💥 Error, please try again later",
                    "error",
                    history,
                    "/"
                );
            })
        }
    };

    useEffect(() => {
        if (!user || user === undefined || JSON.stringify(user) === "{}") {
            async function getUser() {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/users/current-user`
                );
                if (response.data) {
                    history.push("/")
                }
            }
            getUser();
        } else {
            history.push("/")
        }
    }, []);

    return (
        <div className="login-wrapper">
            <NavbarComponent />
            {successMsg ? <ToastContainer /> : null}
            <div
                style={{
                    backgroundColor: "#ebeeef",
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    marginTop: "-80px",
                }}
            >
                <div className="container ">
                    <div className="row">
                        <div className=" login-form col-lg-6 col-md-8">
                            <div className="login-form-title">
                                <span className="login-form-title-1">
                                    Forgot password
                                </span>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Email address
                                    </label>
                                    <div className="input-group-prepend">
                                        <span
                                            className={`input-group ${
                                                error ? "border-danger" : ""
                                            }`}
                                        ></span>
                                    </div>
                                    <input
                                        type="email"
                                        className={`form-control  ${
                                            error ? "is-invalid" : ""
                                        }`}
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary mb-3 site-btn"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default ForgotPassword;
