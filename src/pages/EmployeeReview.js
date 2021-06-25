import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "../assets/front/css/index.css";
import "../assets/front/css/profile.css";

const EmployeeReview = ({ job }) => {
  const [jobState, setJobState] = useState(job);
  useEffect(() => {}, []);
  return (
    <>
    {
      jobState.review ? (
        <div className="one__review" >
        <div className="reviewer">
          <div className="row">
            <div className="col-2">
              <img
                src={`http://localhost:5000/uploads/users/${jobState.client.picture}`}
                alt=""
              />
            </div>
            <div className="col-6">
              <h4>{jobState.client.firstName + " " + jobState.client.lastName}</h4>
              <div className="rate">
                {
                  <ReactStars
                    count={jobState.review.rate}
                    value={jobState.review.rate}
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
              <p>{jobState.review.comment}</p>
            </div>
          </div>
        </div>
      </div>
      ):<div>No Reviews</div>}
   
    </>
  );
};

export default EmployeeReview;
