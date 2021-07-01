import axios from "axios";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import { useHistory } from "react-router-dom";

import "../assets/front/css/register.scoped.css";
import bsCustomFileInput from "bs-custom-file-input";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  firstName: yup.string().min(3).max(15).required("First Name Required"),
  lastName: yup.string().min(3).max(15).required("Last Name Required"),
  email: yup.string().email("Invalid Email").required("Email Required"),
  password: yup.string().min(6).required("Password Required"),
  phone: yup
    .string()
    .matches(/^01[0125][0-9]{8}$/gm, "Invalid Phone Number")
    .required("Phone Required"),
  address: yup.string().required("Address Required"),
  dateOfBirth: yup.date(),

  professionRequired: yup.boolean(),
  profession: yup.string().when("professionRequired", {
    is: true,
    then: yup.string().required(),
  }),
});

function Register() {
  const [professions, setProfessions] = useState([]);
  const history = useHistory();
  const [role, setRole] = useState("user");

  toast.configure();

  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/professions")
      .then((res) => setProfessions(res.data));
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
        <Container className="mt-5 col-lg-6">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item ">
              <button
                className={`nav-link ${role === "employee" ? "active" : ""}`}
                onClick={() => setRole("employee")}
              >
                Employee
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${role === "user" ? "active" : ""}`}
                onClick={() => setRole("user")}
              >
                User
              </button>
            </li>
          </ul>
          <div className=" login-form ">
            <div className="login-form-title">
              <h1 className="mt-4 mb-4 login-form-title-1">Register</h1>
            </div>

            {/* <h1 className="mt-4 mb-4">Register</h1> */}
            <Formik
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                try {
                  const formData = new FormData();

                  for (let field in values) {
                    if (
                      field === "professionRequired" ||
                      (field === "profession" && values[field] === "")
                    ) {
                      continue;
                    } else {
                      formData.append(field, values[field]);
                    }
                  }
                  for (let i of formData.entries()) {
                    console.log(i[0] + " => " + i[1]);
                  }

                  axios
                    .post(
                      `${process.env.REACT_APP_API_URL}/${role}s`,
                      formData,
                      {
                        "Content-Type": "multipart/form-data",
                      }
                    )
                    .then(async (res) => {
                      toast.success("Registered Successfully");
                      history.push("/");
                    })
                    .catch((err) => {
                      const error = err.response.data.error;
                      if (error === "email") {
                        toast.error("Email already registered");
                        actions.setFieldError(
                          "email",
                          "Email is already Registered"
                        );
                      }
                      if (error === "phone") {
                        toast.error("Phone already registered");
                        actions.setFieldError(
                          "phone",
                          "Phone is already Registered"
                        );
                      }
                    });
                } catch (error) {
                  console.error(error);
                } finally {
                  actions.setSubmitting(false);
                }
              }}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phone: "",
                address: "",
                dateOfBirth: "",
                profession: "",
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
                    <Form.Group as={Col} md="6" controlId="validationFormik101">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.firstName && !!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik102">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.lastName && !!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.lastName}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md="6"
                      controlId="validationFormikUsername2"
                    >
                      <Form.Label>Email</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.email}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik103">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.password && !!errors.password}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md={role === "employee" ? "4" : "6"}
                      controlId="validationFormik104"
                    >
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                    {role === "employee" ? (
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik110"
                      >
                        <Form.Label>Profession</Form.Label>
                        <Form.Control
                          as="select"
                          name="profession"
                          value={values.profession}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.profession && !!errors.profession}
                        >
                          {professions.map((profession) => (
                            <option value={profession._id} key={profession._id}>
                              {profession.title}
                            </option>
                          ))}
                        </Form.Control>

                        <Form.Control.Feedback type="invalid" tooltip>
                          {errors.profession}
                        </Form.Control.Feedback>
                      </Form.Group>
                    ) : null}
                    <Form.Group
                      as={Col}
                      md={role === "employee" ? "4" : "6"}
                      controlId="validationFormik114"
                    >
                      <Form.Label>Birth Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={values.dateOfBirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.dateOfBirth && !!errors.dateOfBirth}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.dateOfBirth}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormik105"
                    >
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.address && !!errors.address}
                      />
                      <Form.Control.Feedback type="invalid" tooltip>
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group>
                    <Form.File
                      className="position-relative "
                      // required
                      name="picture"
                      label="Picture"
                      onChange={(e) => (values.picture = e.target.files[0])}
                      onBlur={handleBlur}
                      isInvalid={touched.picture && !!errors.picture}
                      feedback={errors.picture}
                      id="validationFormik107"
                      feedbackTooltip
                      custom
                    />
                  </Form.Group>
                  <Button type="submit" className="site-btn ">
                    Submit form
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
}
export default Register;
