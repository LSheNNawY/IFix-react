import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "../components/front/NavbarComponent";
import ProfessionComponent from "../components/front/ProfessionComponent";
import FooterComponent from "../components/front/FooterComponent";
import Employee from "../components/front/EmployeeComponent";
import ChooseUsComponent from "../components/front/ChooseUsComponent";

import "../assets/front/css/index.scoped.css";
// import "../assets/front/css/animate.min.css";

import carosel from "../assets/front/img/carasoul/carasoul1.jpg";
import carosel2 from "../assets/front/img/carasoul/ca.jpg";

const ajaxGetProfessions = async (professionsNum = "3") => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL}/professions?professions=${professionsNum}`
  );
};

const Home = () => {
  const [professions, setProfessions] = useState([]);
  const [employees, setEmployees] = useState([]);
  const sliderText = "We Provide Best Fix Services";

  useEffect(() => {
    ajaxGetProfessions(3).then(({ data }) => {
      setProfessions(data);
      let emps = [];
      data.forEach((profession) => {
        if (profession.employees.length > 0) {
          emps.push(profession.employees[0]);
        }
      });

      setEmployees(emps);
    });
  }, []);
  return (
    <div className="index-wrapper">
      <NavbarComponent />
      {/* carousel  */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carosel} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="hero__text">
                <span className=" animate__animated animate__fadeInLeft">
                  Best fix
                </span>
                <h2>{sliderText}</h2>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={carosel2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="hero__text">
                <span>Best fix</span>
                <h2>{sliderText}</h2>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carosel} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="hero__text">
                <span>Best fix</span>
                <h2>{sliderText}</h2>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* services */}
      <div className="team services">
        <div className="container-fluid" style={{ paddingBottom: "40px" }}>
          <div
            className="row"
            style={{
              width: "90%",
              marginLeft: "5%",
              marginTop: "50px",
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
              >
                {""}
              </h2>
              <div className="row">
                {professions.map((profession) => (
                  <ProfessionComponent
                    profession={profession}
                    key={profession._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChooseUsComponent />
      {/* small insights */}
      <div className="counter">
        <div className="container-fluid">
          <div
            className="row"
            style={{
              width: "90%",
              marginLeft: "5%",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            
          </div>
        </div>
      </div>

      {/* team */}
      <div
        className="team"
        style={{
          position: "relative",
          bottom: "210px",
        }}
      >
        <div className="container-fluid">
          <div
            className="row "
            style={{
              width: "90%",
              marginLeft: "5%",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <div className="col-12 text-center " style={{marginTop:"10%"}}>
              <p className="label ">TOP RATED</p>
              <h2>Meet our TOP RATED</h2>
              <h2
                className="mt-3 mb-3"
                style={{
                  width: "120px",
                  borderBottom: "3px solid lightgray",
                  marginLeft: "45%",
                }}
              >
                {""}
              </h2>
              <div
                className="row"
                style={{
                  marginTop: "30px",
                }}
              >
                {employees.length > 0 &&
                  employees.map((employee) =>
                    employee.status === "active" ? (
                      <Employee employee={employee} key={employee._id} />
                    ) : null
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* get a service */}
      <section className="ourServices">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="ourServices__text">
                <h2>We Offer Fast, Professional &amp; Exceptional Services</h2>
                <Link to="professions" className="primary-btn">
                  Get a services
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="ourServices__pic set-bg"
          data-setbg="img/callto-right.jpg"
        ></div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default Home;
