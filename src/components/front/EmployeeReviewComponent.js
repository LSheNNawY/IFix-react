import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "../../assets/front/css/index.css";
import "../../assets/front/css/profile.css";

const EmployeeReviewComponent = ({ job }) => {
  const [empJob, setempJob] = useState(job);
  console.log(empJob);
 
  return (
    <>
    {
      empJob.review ? (
        <div className="one__review" >
        <div className="reviewer">
          <div className="row">
            <div className="col-2">
              <img
                src={`http://localhost:5000/uploads/users/${empJob.client.picture}`}
                alt=""
              />
            </div>
            <div className="col-6">
              <h4>{empJob.client.firstName + " " + empJob.client.lastName}</h4>
              <div className="rate">
                {
                  <ReactStars
                    count={empJob.review.rate}
                    value={empJob.review.rate}
                    size={24}
                    Color="#ffd700"
                  />
                }
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
      ):""}
   
    </>
  );
};

export default EmployeeReviewComponent;
