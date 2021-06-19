import React from "react";
import { Link } from "react-router-dom";
import "../../assets/front/css/profession.css";
import "../../styles/Header.css";

const ServiceComponent = ({ service }) => {
  console.log("service comp",service)
  return (
    <>
      <div className="col-lg-4 col-md-6 profession-wrapper">
        <div className="services__item">
          <div className="services__item__icon">
            <i className="fas fa-bolt"></i>
            {/* <img src={`http://localhost:5000/uploads/professions/${profession.img}`} alt="profession" /> */}
          </div>
          <div className="services__item__text">
            <a href="electricity_services.html">
              <h4>{service.service}</h4>
            </a>
            <p>{service.description}</p>
            <p style={{color:"#111", fontWeight:"700"}}>price : {service.price}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
