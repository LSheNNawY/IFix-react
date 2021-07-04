import React from "react";
import "../../assets/front/css/profession.css";
import "../../styles/Header.css";

const ServiceComponent = ({ service }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 profession-wrapper">
        <div className="services__item">
          <div className="services__item__icon">
            <i className={`fas fa-${service.icon}`} style={{marginRight:"24%",marginTop:"30%",transform:"rotate(-45deg)"}}></i>
          </div>
          <div className="services__item__text">
            <h4>{service.service}</h4>
            <p>{service.description}</p>
            <p style={{ color: "#111", fontWeight: "700" ,marginTop:"0"}}>
              price : {service.price} EGP
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
