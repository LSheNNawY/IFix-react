import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import { ToastContainer } from "react-toastify";
import { notify } from "../helpers/generalFunctions";

import "react-toastify/dist/ReactToastify.css";

import "../assets/front/css/index.scoped.css";

const AccountActivation = () => {
    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    const [loading, setLoading] = useState(true);
    const [activationsMsg, setActivationsMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(false);

    const handleSendToken = (e) => {
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/resend-token?email=${email}`
            )
            .then(({ data }) => {
                setActivationsMsg("Token sent.");
                setSuccessMsg(true);
                notify(
                    "💥 Token sent, Check you're email",
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
    };

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/account-activation?email=${email}&token=${token}`
            )
            .then(({ data }) => {
                setLoading(false);
                setActivationsMsg("You're account has been activated.");
                setSuccessMsg(true);
                notify(
                    "💥 Success, You'r account has been activated",
                    "success",
                    history,
                    "/"
                );
            })
            .catch(({ response }) => {
                setLoading(false);
                if (response.status === 404) {
                    setActivationsMsg("Invalid token");
                    setSuccessMsg(true);
                    notify("💥 Error, invalid token", "error", history, "/");
                } else {
                    setActivationsMsg("Token expired");
                }
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
                                <h2>Activation</h2>
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
                    <div className="col-12 text-center">
                        {loading ? <h2>Loading....</h2> : null}
                        {activationsMsg &&
                        activationsMsg !== "Token expired" ? (
                            <h2>{activationsMsg}</h2>
                        ) : (
                            <>
                                {!loading ? (
                                    <div>
                                        <h2>
                                            {activationsMsg}, click button below
                                            to send another token to your email
                                        </h2>
                                        <button
                                            className="primary-btn"
                                            onClick={(e) => handleSendToken(e)}
                                        >
                                            Send
                                        </button>
                                    </div>
                                ) : null}
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

export default AccountActivation;
