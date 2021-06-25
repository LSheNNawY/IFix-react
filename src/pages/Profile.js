import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import FooterComponent from "../components/front/FooterComponent";
import NavbarComponent from "../components/front/NavbarComponent";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import EmployeeReview from "./EmployeeReview";
import ClientJobs from "./ClientJobs";

import "../assets/front/css/animate.min.css";
import "../assets/front/css/profile.css";

import empImg from "../assets/front/img/employees/employee1.jpg";
import clientDefaultImg from "../assets/front/img/employees/employee2.jpg";

const Profile = (props) => {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState({});
  const [role, setRole] = useState("");
  const [jobs, setJobs] = useState([]);

  const history = useHistory();

  const ajaxGetUser = async (id, roleState) => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/${roleState}s/` + id)
      .then(({ data }) => {
        setUserData(data);
        getUserJobs(data)
      });
  };

  const getUserJobs = async (user) => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/jobs?userId=${user._id}`)
      .then(({ data }) => {
        setJobs(data);
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
        } else {
          if (JSON.stringify(props.match.params) !== "{}") {
            let { id } = props.match.params;
            setRole("employee");
            ajaxGetUser(id, "employee");
          } else {
            if (response.data.role === "employee") {
              setRole("employee");
              ajaxGetUser(response.data.id, "employee");
            } else {
              setRole("user");
              console.log("user");
              ajaxGetUser(response.data.id, "user");
            }
          }
        }
      }
      getUser();
    } else {
      if (JSON.stringify(props.match.params) !== "{}") {
        let { id } = props.match.params;
        setRole("employee");
        ajaxGetUser(id, "employee");
      } else {
        if (user.role === "employee") {
          setRole("employee");
          ajaxGetUser(user.data.id, "employee");
        } else {
          setRole("user");
          ajaxGetUser(user.data.id, "user");
        }
      }
    }
  }, []);
  return (
    <div className="index-wrapper">
      <NavbarComponent />
      {JSON.stringify(userData) !== "{}" ? (
        <>
          <section className="home_banner_area">
            <div className="container box_1620">
              <div className="row">
                <div className="col-lg-6 home_banner_area_image">
                  <img
                    src={
                      userData.picture
                        ? `http://localhost:5000/uploads/users/${userData.picture}`
                        : empImg
                    }
                    alt=""
                  />
                </div>
                <div className="col-lg-6 home_banner_area_text">
                  <div className="personal_text">
                    <h6>Hello Everybody, i am</h6>
                    <h3>{userData.firstName + " " + userData.lastName}</h3>
                    {role === "employee" ? (
                      userData.profession ? (
                        <h4>{userData.profession.title}</h4>
                      ) : null
                    ) : null}

                    <ul className="list basic_info mb-5">
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>{" "}
                          {dateFormat(userData.dateOfBirth, "mmmm dS, yyyy")}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-phone"></i> {userData.phone}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-envelope-square"></i>{" "}
                          {userData.email}
                        </a>
                      </li>
                    </ul>
                    {/* {user && user.id === id ? (
                    <button type="submit" className="site-btn">
                      Edit Profile
                    </button>
                  ) : (
                    <Link
                      to={`/order?prof=${
                        userData.profession ? userData.profession._id : ""
                      }&emp=${userData._id}`}
                      className="site-btn"
                    >
                      BOOK
                    </Link>
                  )} */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {role === "employee" ? (
            <>
              <section className="review">
                <div className="container">
                  <h1>REVIEWS</h1>
                  {jobs &&
                    jobs.map((job) => {
                      return <EmployeeReview key={job._id} job={job} />;
                    })}
                </div>
              </section>
            </>
          ) : (
            <>
              <section>
                <div className="container" style={{ marginTop: "15rem" }}>
                  <h1>My Jobs</h1>
                  {jobs &&
                     jobs.map((job) => {
                      return <ClientJobs key={job._id} job={job} />;
                    })}
                </div>
              </section>
            </>
          )}
        </>
      ) : (
        <h1 class="text-center">Loading</h1>
      )}
      <FooterComponent />
    </div>
  );
};

export default Profile;
