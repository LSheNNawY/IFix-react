import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import ProfessionComponent from "../components/front/ProfessionComponent";
import FooterComponent from "../components/front/FooterComponent";

import "../assets/front/css/index.scoped.css";

// const ajaxGetProfessions = async () => {
//   return await axios.get(`${process.env.REACT_APP_API_URL}/professions`);
// };

const AllProfessions = () => {
  const [professions, setProfessions] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/professions?page=${pageNumber}`)
      .then(({ data }) => {
        setProfessions(data.professions);
        setTotalPages(data.totalPages);
      });
  }, []);
  return (
    <div className="index-wrapper">
      <NavbarComponent />
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Our Services</h2>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span style={{ color: "white" }}>|</span>
                  <Link to="/professions">Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div
          className="row "
          style={{
            width: "90%",
            marginLeft: "5%",
            marginTop: "50PX",
            marginBottom: "50px",
          }}
        >
          <div className="col-12 text-center">
            <p className="label ">OUR SERVICES</p>
            <h2>SERVICES WE OFFER</h2>
            <h2
              className="mt-3 mb-3"
              style={{
                width: "120px",
                borderBottom: "3px solid lightgray",
                marginLeft: "45%",
              }}
            ></h2>
          </div>
        </div>
        <div
          className="row "
          style={{
            width: "90%",
            marginLeft: "5%",
            marginTop: "50PX",
            marginBottom: "50px",
          }}
        >
          {professions.length > 0 &&
            professions.map((profession) => (
              <ProfessionComponent
                profession={profession}
                key={profession._id}
              />
            ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default AllProfessions;
