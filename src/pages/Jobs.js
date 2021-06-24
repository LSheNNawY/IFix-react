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

const Jobs = () => {
  const { user } = useContext(UserContext);
  const [loggedUser, setLoggedUser] = useState({});
  const history = useHistory();

  const ajaxGetUser = async (id) => {
    await axios
      .get(process.env.REACT_APP_API_URL + "/users/" + id)
      .then(({ data }) => {
        setLoggedUser(data);
      });
  };

  useEffect(() => {
    if (user === undefined || JSON.stringify(user) === "{}") {
      async function getUser() {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/current-user`
        );

        if (response.data === "") {
          history.push("/login");
        } else if (response.data.role === "employee") {
          history.push("/");
        } else {
          ajaxGetUser(response.data.id);
        }
      }
      getUser();
    } else {
      if (user.role === "employee") {
        history.push("/");
      } else {
        ajaxGetUser(user.id);
      }
    }
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
      {loggedUser.jobs ? (
        <div className="container">
          <div className="row">
            <div className=" profession-wrapper">
              {/* one job */}
              {loggedUser.jobs.map((job) => (
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
                          <p className="lead">{job.service}</p>
                        </div>
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
                                  To :
                                  {dateFormat(job.ended_at, "mmmm dS, yyyy")}
                                </h4>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          {job.review === undefined &&
                          JSON.stringify(job.ended_at) !== undefined ? (
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
                          ) : (
                            ""
                          )}
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
