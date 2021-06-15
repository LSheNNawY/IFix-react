import axios from "axios";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  title: yup.string().min(3).max(15).required("Title Required"),
  description: yup.string().required("Description Required"),
  service: yup.string().required("Service Required"),
  img: yup.string().required("Img Required"),
  price :yup.number()
});

function Profession() {
  const history = useHistory();
  return (
    <>
      <Container className="mt-3">
        <h2 className="mt-4 mb-2 text-center">Create Profession</h2>
        <Formik
          validationSchema={schema}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            try {
              let serviceData = {};
              const formData = new FormData();
              for (let field in values) {
                if (["service", "description", "price"].indexOf(field) !== -1) {
                  Object.assign(serviceData, { [field]: values[field] });
                } else {
                  formData.append(field, values[field]);
                }
              }
              formData.append("services", JSON.stringify([serviceData]));
              const added = await axios.post(
                process.env.REACT_APP_API_URL + "/professions",
                formData,
                {
                  "Content-Type": "multipart/form-data",
                }
              );
              if (added) {
                history.push("/admin/professions");
              }
              actions.setSubmitting(false);
            } catch (error) {
              console.error(error);
            }
          }}
          initialValues={{
            title: "",
            img: "",
            service: "",
            description: "",
            price: 0,
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
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.title && errors.title}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.title}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="10"
                  className="offset-1"
                  controlId="validationFormik102"
                >
                  <Form.File
                    className="position-relative"
                    required
                    name="img"
                    label="Image"
                    onChange={(e) => (values.img = e.target.files[0])}
                    onBlur={handleBlur}
                    isInvalid={touched.img && errors.img}
                    feedback={errors.img}
                    feedbackTooltip
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="5"
                  className="offset-1"
                  controlId="validationFormik102"
                >
                  <Form.Label>Service</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="service"
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.service && errors.service}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.service}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="validationFormik104" >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.price}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group
                  as={Col}
                  md="10"
                  className="offset-1"
                  controlId="validationFormik103"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.description && errors.description}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row className="text-center">
                <Button type="submit" style={{ margin: "auto" }} >
                  Save
                </Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default Profession;
