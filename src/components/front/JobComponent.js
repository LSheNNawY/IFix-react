import React from "react";
import dateFormat from "dateformat";
export default function JobComponent({ job }) {
    console.log(job.started_at);
    return (
        <div className="services__item" key={job._id}>
            <div className="col-xs-12 col-lg-8" style={{ margin: "auto" }}>
                <div className="row job_container">
                    <div className="col-3">
                        <div className="services__item__icon  ">
                            <i className="fas fa-bolt"></i>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="services__item__text"></div>
                        <div className="dates">
                            <div className="row ">
                                <div className="col-6 ">
                                    <h4>
                                        Start_date:{" "}
                                        <h6>
                                            {job.started_at ? (
                                                dateFormat(
                                                    job.started_at,
                                                    "mmmm dS, yyyy"
                                                )
                                            ) : (
                                                <span class="badge badge-warning">
                                                    Pending
                                                </span>
                                            )}
                                        </h6>
                                    </h4>
                                </div>
                                <div className="col-6 ">
                                    <h4>
                                        End_date:{" "}
                                        <h6>
                                        {job.started_at ? (
                                                dateFormat(
                                                    job.ended_at,
                                                    "mmmm dS, yyyy"
                                                )
                                            ) : (
                                                <span class="badge badge-warning">
                                                    Pending
                                                </span>
                                            )}
                                        </h6>
                                    </h4>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 ">
                                    <h4>
                                        Price : <h6>{job.price} EGP</h6>
                                    </h4>
                                </div>
                                <div className="col-6">
                                    <i
                                        className="far fa-edit"
                                        style={{
                                            fontSize: "30px",
                                            padding: "30px",
                                        }}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
