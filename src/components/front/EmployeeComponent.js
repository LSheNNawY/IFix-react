import React from "react";
import { Link } from "react-router-dom";
import empImg from "../../assets/front/img/employees/employee1.jpg";

export default function Employee({ employee }) {
  return (
    <>
      <div className="col-lg-3 col-md-6" key={employee._id}>
        <Link to={`/profile/${employee._id}`}>
          <img src={employee.image ?? empImg} alt="img" />
        </Link>
        <div className="team__item__text">
          <Link to={`/profile/${employee._id}`}>
            <h4>{`${employee.firstName} ${employee.lastName}`}</h4>
          </Link>
          <div className="rate">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </>
  );
}
