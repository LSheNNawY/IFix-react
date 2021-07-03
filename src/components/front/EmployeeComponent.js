import React from "react";
import { Link } from "react-router-dom";
import empImg from "../../assets/front/img/employees/employee1.jpg";

export default function Employee({ employee }) {
  console.log(employee);
  const ratingArr = new Array(Math.ceil(employee.rating) || 3).fill(null);

  console.log(ratingArr);
  return (
    <>
      <div className="col-lg-3 col-md-6" key={employee._id}>
        <Link to={`/profile/employee/${employee._id}`}>
          <img src={employee.image ?? empImg} alt="img" />
        </Link>
        <div className="team__item__text">
          <Link to={`/profile/employee/${employee._id}`}>
            <h4>{`${employee.firstName} ${employee.lastName}`}</h4>
          </Link>
          <div className="rate">
            {ratingArr.map((v, i) => <i className="fas fa-star" key={i}></i>)}
          </div>
        </div>
      </div>
    </>
  );
}
