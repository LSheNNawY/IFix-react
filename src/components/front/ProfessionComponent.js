import React from "react";
import { Link } from "react-router-dom";
import "../../assets/front/css/profession.css";
import "../../styles/Header.css";

const ProfessionComponent = ({ profession }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 profession-wrapper">
        <div className="services__item">
          <Link
            to={{
              pathname: `/services/${profession._id}`,
            //   profession: { profession: profession },
            }}
          >
            {" "}
            <div className="services__item__icon">
              <i className="fas fa-bolt"></i>
              {/* <img src={`http://localhost:5000/uploads/professions/${profession.img}`} alt="profession" /> */}
            </div>
          </Link>
          <div className="services__item__text">
          <Link
            to={{
              pathname: `/services/${profession._id}`,
            //   profession: { profession: profession },
            }}
          >
              <h4>{profession.title}</h4>
            </Link>
            <p>You can go and get more details</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionComponent;
