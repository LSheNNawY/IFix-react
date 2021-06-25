import React, { useContext, useEffect, useState } from "react";
import "../assets/front/css/index.css";
import "../assets/front/css/register.css";
import * as yup from "yup";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { Formik } from "formik";

const Review = (props) => {
  const [rate, setRate] = useState(0);
  const { job, setJob, show, onHide } = props;

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
        setJob(data);
        onHide()
      });
  };


  useEffect(() => {
    
  }, []);

  return (
    <Modal
      {...props}
      // size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      // centered
    >
      <Modal.Body className="show-grid">
        <Container className="mt-3 w-100">
          <h2 className="mt-4 mb-4 text-center">Review</h2>
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
                    md="10"
                    className="offset-1"
                    controlId="validationFormik101"
                  >
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      cols="30"
                      rows="4"
                      type="text"
                      name="comment"
                      value={values.comment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Comment"
                      isInvalid={touched.comment && errors.comment}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.comment}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md="10"
                    className="offset-1"
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
                <Form.Row >
                <Form.Group
                    as={Col}
                    md="12"
                    className="text-center"
                    controlId="validationFormik105"
                  >
                  <Button type="submit" className="site-btn ">
                    Review
                  </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Review;
