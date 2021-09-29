import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dateFormat from "dateformat";
import FooterComponent from "../components/front/FooterComponent";
import NavbarComponent from "../components/front/NavbarComponent";
import UserContext from "../context/UserContext";
import { useHistory } from "react-router-dom";
import EmployeeReview from "../components/front/EmployeeReviewComponent";
import ClientJobs from "./ClientJobs";

import "../assets/front/css/animate.min.css";
import "../assets/front/css/profile.css";
import empImg from "../assets/front/img/employees/employee1.jpg";
import clientDefaultImg from "../assets/front/img/employees/employee2.jpg";
import ProfileEdit from "../components/ProfileEdit";
import PaginationComponent from "../components/front/PaginationComponent";

import Loading from "../components/Loading";

const EmployeeProfile = (props) => {
  const [employeeData, setEmployeeData] = useState({});
  const [jobs, setJobs] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  let { id } = props.match.params;

  const ajaxGetEmployee = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/employees/` + id)
      .then(({ data }) => {
        setEmployeeData(data);
        getEmployeeJobs(data);
      }).catch((error) => {
        history.push("/notfound")
      })
  };

  const getEmployeeJobs = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/jobs?userId=${id}`)
      .then(({ data }) => {
        setJobs(data.jobs);
      });
  };

  useEffect(() => {
    setLoading(true);
    ajaxGetEmployee();
  }, []);

  return (
    <div className="index-wrapper">
      <NavbarComponent />
      {JSON.stringify(employeeData) !== "{}" ? (
        <>
          <section className="home_banner_area">
            <div className="container box_1620">
              <div className="row">
                <div className="col-lg-6 home_banner_area_image">
                  <img
                    src={
                      employeeData.picture
                        ? `${process.env.REACT_APP_API_PUBLIC_URL}/uploads/users/${employeeData.picture}`
                        : empImg
                    }
                    alt=""
                  />
                </div>
                <div className="col-lg-6 home_banner_area_text">
                  <div className="personal_text">
                    <h6>Hello Everybody, i am</h6>
                    <h3>
                      {employeeData.firstName + " " + employeeData.lastName}
                    </h3>
                    {employeeData.profession ? (
                      <h4>{employeeData.profession.title}</h4>
                    ) : null}

                    <ul className="list basic_info mb-5">
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt"></i>{" "}
                          {dateFormat(
                            employeeData.dateOfBirth,
                            "mmmm dS, yyyy"
                          )}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-phone"></i> {employeeData.phone}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-envelope-square"></i>{" "}
                          {employeeData.email}
                        </a>
                      </li>
                    </ul>

                    <Link
                      to={`/order?prof=${
                        employeeData.profession
                          ? employeeData.profession._id
                          : ""
                      }&emp=${employeeData._id}`}
                      className="site-btn"
                    >
                      BOOK
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
        <Loading />
      )}
      <FooterComponent />
    </div>
  );
};

export default EmployeeProfile;
