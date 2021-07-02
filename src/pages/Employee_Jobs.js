import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import "../assets/front/css/index.css";
import { Link } from "react-router-dom";
import JobComponent from "../components/front/JobComponent";
import PaginationComponent from "../components/front/PaginationComponent";
import UserContext from "../context/UserContext";

const Jobs = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [loggedUser, setLoggedUser] = useState({});
  const [jobs, setJobs] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getEmployeeJobs = async (user) => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/jobs?userId=${user.id}&&page=${pageNumber}`
      )
      .then(({ data }) => {
        setJobs(data.jobs);
        setTotalPages(data.totalPages);
      });
  };

  useEffect(() => {
    if (user === undefined || JSON.stringify(user) === "{}") {
      async function getUser() {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/current-user`
        );
        setLoggedUser(response.data);
        if (JSON.stringify(response.data) === "{}") {
          history.push(`/login`);
        } else if (response.data.role !== "employee") {
          history.push("/");
        } else {
          getEmployeeJobs(response.data);
        }
      }
      getUser();
    } else {
      setLoggedUser(user);
      if (user.role === "employee") {
        getEmployeeJobs(user);
      } else {
        history.push("/");
      }
    }
  }, [pageNumber]);

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
          }}
        >
          <div className="container">
            <div className="row">
              <div className=" profession-wrapper">
                {jobs.map((job) => (
                  <JobComponent job={job} key={job._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <PaginationComponent
          pageNumber={pageNumber}
          totalPages={totalPages}
          setPageNumber={setPageNumber}
        />
      </div>

      <FooterComponent />
    </div>
  );
};

export default Jobs;