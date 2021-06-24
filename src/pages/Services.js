import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import Employee from "../components/front/EmployeeComponent";
import "../assets/front/css/index.css";
import ServiceComponent from "./../components/front/ServiceComponent";

const ajaxGetProfession = async (id) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/professions/${id}`);
};

const Services = (props) => {
  const [profession, setProfession] = useState([]);
  const { id } = props.match.params;

  useEffect(() => {
    ajaxGetProfession(id).then(({ data }) => {
      // console.log(data);
      setProfession(data);
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
                  <Link to={`/services/${profession._id}`}>Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {profession && (
        <div className="container">
          <div
            className="row"
            style={{
              width: "90%",
              marginLeft: "5%",
              marginTop: "50PX",
              marginBottom: "50px",
            }}
          >
            <div className="col-12 text-center">
              <p className="label ">{profession.title}</p>
              <h2>SERVICES WE OFFER</h2>
              <h2
                className="mt-3 mb-3"
                style={{
                  width: "120px",
                  borderBottom: "3px solid lightgray",
                  marginLeft: "45%",
                }}
              >
              </h2>
            </div>
            {profession.services &&
              profession.services.map((service) => {
                return <ServiceComponent service={service} key={service._id} />;
              })}
          </div>
          {/* team */}
          <div
            className="team"
          >
            <div className="container-fluid">
              <div
                className="row "
                style={{
                  marginLeft: "5%",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                <div className="col-12 text-center">
                  <p className="label ">TOP RATED</p>
                  <h2>Meet our Employees</h2>
                  <h2
                    className="mt-3 mb-3"
                    style={{
                      width: "120px",
                      borderBottom: "3px solid lightgray",
                      marginLeft: "45%",
                    }}
                  ></h2>
                  <div
                    className="row"
                    style={{
                      marginTop: "30px",
                    }}
                  >
                    {profession.employees &&
                      profession.employees.map((employee) => (
                        <Employee employee={employee} key={employee._id} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <FooterComponent />
    </div>
  );
};

export default Services;
