import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import "../assets/front/css/index.css";
import contact_header from "../assets/front/img/contact_header.PNG";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const Jobs = () => {
  const [user, setUser] = useState({
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
  const ajaxGetUser = async () => {
    let id = "60cecaf14b437f1dedff2d2c"; //should be authenticated user
    await axios
      .get(process.env.REACT_APP_API_URL + "/users/" + id)
      .then(({ data }) => {
        setUser(data);
      });
  };

  useEffect(() => {
    ajaxGetUser();
  }, []);

  return (
    <div className="index-wrapper">
      <NavbarComponent />

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>jobs</h2>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span style={{ color: "white" }}>|</span>
                  <Link to="/contact">contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div
          className="row"
          style={{
            width: "98%",
            marginLeft: "1%",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          {/* my jobs */}
          <div className="container">
            <div className="row">
              <div className=" profession-wrapper">
                {/* one job */}
                {user.jobs.map((job) => (
                  <div className="services__item ">
                    <div
                      className="col-xs-12 col-lg-8"
                      style={{ margin: "auto" }}
                    >
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
                                    {dateFormat(
                                      job.started_at,
                                      "mmmm dS, yyyy"
                                    )}
                                  </h6>
                                </h4>
                              </div>
                              <div className="col-6 ">
                                <h4>
                                  End_date:{" "}
                                  <h6>
                                    {dateFormat(job.ended_at, "mmmm dS, yyyy")}
                                  </h6>
                                </h4>
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col-6 ">
                                <h4>
                                  Price : <h6>{/* {job.price} */} 500</h6>{" "}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Jobs;
