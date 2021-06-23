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
    let id = "60c67036a55795eae7bb274d";
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
      <div
        className="contact"
        style={{
          backgroundImage: `url(${contact_header})`,
          marginTop: "-30px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>MY JOBS</h2>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span style={{ color: "white" }}>|</span>
                  <Link to="/jobs">Jobs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* my jobs */}
      {user.jobs ? (
        <div className="container">
          <div className="row">
            <div className=" profession-wrapper">
              {/* one job */}
              {user.jobs.map((job) => (
                <div className="services__item ">
                  <div
                    className="col-xs-12 col-lg-10"
                    style={{ margin: "auto" }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <div className="services__item__icon  ">
                          <i className="fas fa-bolt"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="services__item__text">
                          <p className="lead">{job.description}</p>
                        </div>
                        <div className="dates">
                          <div className="row">
                            <div className="col-6">
                              <h4>
                                From :{" "}
                                {dateFormat(job.started_at, "mmmm dS, yyyy")}{" "}
                              </h4>
                            </div>
                            <div className="col-6">
                              <h4>
                                To : {dateFormat(job.ended_at, "mmmm dS, yyyy")}{" "}
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <Link
                              className="offset-11 col-1"
                              style={{ display: "inline-block" }}
                              to={{
                                pathname: "/review",
                                state: {
                                  job: job,
                                },
                              }}
                            >
                              {" "}
                              <div>
                                <button type="submit" class="site-btn">
                                  Review
                                </button>
                              </div>
                            </Link>
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
      ) : (
        <div>Loading ......</div>
      )}
      <FooterComponent />
    </div>
  );
};

export default Jobs;
