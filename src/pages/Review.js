import React, {useContext, useEffect, useState } from "react";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import "../assets/front/css/index.css";
import "../assets/front/css/register.css";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

import ReactStars from "react-rating-stars-component";
import axios from "axios";

const Review = (props) => {
  const [job, setJob] = useState({});
  const { user } = useContext(UserContext);
  const [loggedUser, setLoggedUser] = useState({});
  const [rate, setRate] = useState(0);
  const location = useLocation();
  const history = useHistory();

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const handleUpdateReview = async (values) => {
    let review = {
      review: {
        rate: rate,
        comment: values.comment,
      }
    };
    await axios
      .put(process.env.REACT_APP_API_URL + "/jobs/" + job._id +"/updateReview", review , {
        "Content-Type": "multipart/form-data",
      })
      .then(({ data }) => {
        history.push("/jobs");
      });
  };

  useEffect(() => {
    if (user === undefined || JSON.stringify(user) === "{}") {
      async function getUser() {
          const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/users/current-user`
          );

          if (JSON.stringify(response.data) === "{}") {
              history.push('/login');
          } else if (response.data.role === "employee") {
              history.push("/");
          } else {
           setLoggedUser(response.data);
          }
      }
      getUser();
  } 
    setJob(location.state.job);
  }, []);

  return (
    <div className="register-wrapper">
      <NavbarComponent />
      <div
        style={{
          backgroundColor: "#ebeeef",
          paddingTop: "120px",
          paddingBottom: "120px",
          marginTop: "-140px",
        }}
      >
        <Container className="mt-5 w-50">
          <div className=" login-form ">
            <div className="login-form-title">
              <h1 className="mt-4 mb-4 login-form-title-1">Review</h1>
            </div>
            <Formik
              // validationSchema={schema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                try {
                  handleUpdateReview(values);
                  actions.setSubmitting(false);
                } catch (error) {
                  console.error(error);
                }
              }}
              initialValues={{
                comment: "",
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form
                  noValidate
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                >
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormik105"
                    >
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="comment"
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // isInvalid={touched.comment && !!errors.comment}
                      />

                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.comment}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormik105"
                    >
                      <Form.Label>Rate</Form.Label>
                      <div>
                        {
                          <ReactStars
                            count={5}
                            size={24}
                            onChange={ratingChanged}
                            activeColor="#ffd700"
                            value={rate}
                          />
                        }
                      </div>
                    </Form.Group>
                  </Form.Row>

                  <Button type="submit" className="site-btn ">
                    Save
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Review;
