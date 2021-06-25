import React, { useEffect, useState } from "react";
import "../assets/front/css/index.css";
import dateFormat from "dateformat";
import Review from "./Review";

const ClientJobs = ({ job }) => {
  const [modalShow, setmodalShow] = useState(false);
  const [jobState, setJobState] = useState(job);

  useEffect(() => {}, []);

  return (
    <>
      <Review
        job={jobState}
        setJob={setJobState}
        show={modalShow}
        onHide={() => setmodalShow(false)}
      />
      <div className="container-fluid">
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
                        <div className="services__item__icon  ">
                          <i className="fas fa-bolt"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="services__item__text"></div>
                        <div className="dates">
                          <div className="row">
                            <div className="col-6 ">
                              <h4>
                                Started At:{" "}
                                <h6 className="badge badge-success">
                                  {job.ended_at
                                    ? dateFormat(job.started_at, "mmmm dS, yyyy - h:MM TT")
                                    : ""}
                                </h6>
                              </h4>
                            </div>
                            <div className="col-6 ">
                              <h4>
                                Ended At:{" "}
                                <h6 className="badge badge-success">
                                  {job.ended_at
                                    ? dateFormat(job.ended_at, "mmmm dS, yyyy - h:MM TT")
                                    : ""}
                                </h6>
                              </h4>
                            </div>
                          </div>

                          <div className="row ">
                            <div className="col-6 ">
                              <h4>
                                Price : <h6 className="badge badge-success">{jobState.price} EGP</h6>{" "}
                              </h4>
                            </div>
                            {job.review === undefined &&
                            JSON.stringify(job.ended_at) !== undefined ? (
                              <div
                                className="col-6"
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
