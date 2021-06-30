import React from "react";
import "../../assets/front/css/profession.css";
import "../../styles/Header.css";

const ServiceComponent = ({ service }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 profession-wrapper">
        <div className="services__item">
          <div className="services__item__icon">
            <i className={`fas fa-${service.icon}`} style={{marginRight:"24%",marginTop:"33%",transform:"rotate(-45deg)"}}></i>
          </div>
          <div className="services__item__text">
            <h4>{service.service}</h4>
            <p>{service.description}</p>
            <p style={{ color: "#111", fontWeight: "700" }}>
              price : $ {service.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
