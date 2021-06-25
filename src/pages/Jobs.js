import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import "../assets/front/css/index.css";
import contact_header from "../assets/front/img/contact_header.PNG";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Jobs = ({ job }) => {
  const history = useHistory();
  const [jobState, setJobState] = useState(job);

  useEffect(() => {}, []);

  return (
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
                          {job.started_at ? (
                            <div className="col-6">
                              <h4>
                                From :
                                {dateFormat(job.started_at, "mmmm dS, yyyy")}
                              </h4>
                            </div>
                          ) : (
                            ""
                          )}

                          {job.ended_at ? (
                            <div className="col-6">
                              <h4>
                                To :{dateFormat(job.ended_at, "mmmm dS, yyyy")}
                              </h4>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="row ">
                          <div className="col-6 ">
                            <h4>
                              Price : <h6>{jobState.price}</h6>{" "}
                            </h4>
                          </div>
                          <div className="col-6">
                            <i
                              className="far fa-edit"
                              style={{ fontSize: "30px", padding: "30px" }}
                            ></i>
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
    </div>
  );
};

export default Jobs;
