import React, { useEffect, useState } from "react";
import "../assets/front/css/index.css";
import dateFormat from "dateformat";
import Review from "./Review";
import { ToastContainer } from "react-toastify";
import Stripe from "../stripe/StripeContainer";

const ClientJobs = ({ job }) => {
    const [modalShow, setmodalShow] = useState(false);
    const [empJob, setempJob] = useState(job);
    const [successMsg, setSuccessMsg] = useState(false);
    const [modalstripe, setmodalstripe] = useState(false);

    return (
        <>
            <Review
                job={empJob}
                setJob={setempJob}
                show={modalShow}
                onHide={() => setmodalShow(false)}
                setSuccessMsg={setSuccessMsg}
            />
            {modalstripe ? (
                <Stripe
                    price={job.price}
                    job_id={job._id}
                    setJob={setempJob}
                    show={modalstripe}
                    onHide={() => setmodalstripe(false)}
                />
            ) : null}
            <div className="container-fluid">
                {successMsg ? <ToastContainer /> : null}
                <div
                    className="row"
                    style={{
                        width: "98%",
                        marginLeft: "1%",
                        marginBottom: "50px",
                    }}
                >
                    {/* my jobs */}
                    <div className="container">
                        <div className="row">
                            <div className="profession-wrapper col-12">
                                {/* one job */}
                                <div
                                    style={{
                                        marginTop: "20px",
                                        marginBottom: "40px",
                                    }}
                                >
                                    <div className="col-xs-12 col-lg-8">
                                        <div className="row job_container">
                                            <div className="col-3">
                                                <div className="services_item_icon">
                                                    <i className="fas fa-bolt"></i>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <div className="services_item_text"></div>
                                                <div className="dates">
                                                    <div className="row">
                                                        <div className="col-6 ">
                                                            <h4>
                                                                Started At:{" "}
                                                                {empJob.started_at ? (
                                                                    <i className="badge badge-success h6">
                                                                        {dateFormat(
                                                                            empJob.started_at,
                                                                            "mmmm dS, yyyy - h:MM TT"
                                                                        )}
                                                                    </i>
                                                                ) : (
                                                                    <div>
                                                                        <i className="badge badge-warning h6">
                                                                            Pending
                                                                        </i>
                                                                    </div>
                                                                )}
                                                            </h4>
                                                        </div>
                                                        <div className="col-6 ">
                                                            <h4>
                                                                Ended At:{" "}
                                                                {empJob.ended_at ? (
                                                                    <i className="badge badge-success h6">
                                                                        {dateFormat(
                                                                            empJob.started_at,
                                                                            "mmmm dS, yyyy - h:MM TT"
                                                                        )}
                                                                    </i>
                                                                ) : (
                                                                    <div>
                                                                        <i className="badge badge-warning h6">
                                                                            Pending
                                                                        </i>
                                                                    </div>
                                                                )}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    <div className="row ">
                                                        <div className="col-6 ">
                                                            <span className="h4 d-block my-1">Price :</span>
                                                            <i
                                                                className={`${
                                                                    empJob.ended_at
                                                                        ? "h6 badge badge-success"
                                                                        : "h6"
                                                                }`}
                                                            >
                                                                {empJob.price} EGP
                                                            </i>
                                                        </div>
                                                        {empJob.review === undefined &&
                                                        empJob.ended_at !== undefined ? (
                                                            <div
                                                                className="col-2"
                                                                onClick={() => setmodalShow(true)}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                <i
                                                                    className="fas fa-comment"
                                                                    style={{ fontSize: "30px", padding: "30px" }}
                                                                ></i>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                        {empJob.ended_at === undefined ? (
                                                            <div
                                                                className="col-3"
                                                                onClick={() => setmodalstripe(true)}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                <i
                                                                    className="fas fa-credit-card"
                                                                    style={{ fontSize: "30px", padding: "30px" }}
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientJobs;