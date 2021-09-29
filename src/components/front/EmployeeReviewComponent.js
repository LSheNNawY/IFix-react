import React, { useState } from "react";
import "../../assets/front/css/index.css";
import "../../assets/front/css/profile.css";

const EmployeeReviewComponent = ({ job }) => {
  const [empJob, setempJob] = useState(job);
  const ratingArr =  job.review ? new Array(job.review.rate).fill(null) : [];
  return (
    <>
      {empJob.review ? (
        <div className="one__review">
          <div className="reviewer">
            <div className="row">
              <div className="col-2">
                <img
                  src={`${process.env.REACT_APP_API_PUBLIC_URL}/uploads/users/${empJob.client.picture}`}
                  alt=""
                />
              </div>
              <div className="col-6">
                <h4>
                  {empJob.client.firstName + " " + empJob.client.lastName}
                </h4>
                <div className="rate">
                  {ratingArr.map((v, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="review__content">
            <div className="row">
              <div className="col-lg-10">
                <p>{empJob.review.comment}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EmployeeReviewComponent;
