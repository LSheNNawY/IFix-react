import axios from "axios";
import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Form, Modal, Image } from "react-bootstrap";
import { useEffect } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().min(3).max(15).required("First Name Required"),
    lastName: yup.string().min(3).max(15).required("Last Name Required"),
    email: yup.string().email("Invalid Email").required("Email Required"),
    passwordRequired: yup.boolean(),
    password: yup.string().min(6).when("passwordRequired", {
      is: true,
      then: yup.string().required(),
    }),
    phone: yup
      .string()
      .matches(/^01[0125][0-9]{8}$/gm, "Invalid Phone Number")
      .required("Phone Required"),
    address: yup.string().required("Address Required"),
    dateOfBirth: yup.date(),
    // pictureRequired: yup.boolean(),
    // picture: yup.mixed().when("pictureRequired", {
    //   is: true,
    //   then: yup.string().required(),
    // }),
    professionRequired: yup.boolean(),
    profession: yup.string().when("professionRequired", {
      is: true,
      then: yup.string().required(),
    }),
  })
  .nullable();

function ProfileForm(props) {
  const [professions, setProfessions] = useState([]);
  const [pic, setPic] = useState("");
  const passwordRef = useRef(null);

  let user = props.user;
  const role = user ? user.role : props.role;
  let show = props.show;

  toast.configure();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/professions`)
      .then(({ data }) => setProfessions(data.professions));
  }, []);

  const handleClose = () => {
    show = false;
    props.setShow(false);
    props.setInfo(null);
  };

  const roleName = (role) => {
    let newRoleName = role.charAt(0).toUpperCase() + role.slice(1);
    return newRoleName;
  };

  const verifyPassword = async (userId, password) => {
    const valid = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/verify-password`,
      { userId, password }
    );
    console.log(valid);
    return valid;
  };

  const formatDate = (date) => {
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = "" + (newDate.getMonth() + 1);
    let day = "" + newDate.getDay();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }

    return [year, month, day].join("-");
  };

  const initialValues = !user
    ? {
      firstName: "",
      lastName: "",
      email: "",
      passwordRequired: true,
      password: "",
      phone: "",
      address: "",
      dateOfBirth: "",
      // pictureRequired: role === "admin" ? false : true,
      // picture: "",
      professionRequired: role === "employee" ? true : false,
      profession: "",
    }
    : {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      passwordRequired: true,
      password: "",
      phone: user.phone,
      address: user.address,
      dateOfBirth: user.dateOfBirth ? formatDate(user.dateOfBirth) : "",
      // pictureRequired: role === "admin" ? false : true,
      // picture: user.picture ?? "",
      professionRequired: role === "employee" ? true : false,
      profession: user.profession ? user.profession._id : "",
    };

  useEffect(() => {
    if (user) {
      setPic("http://localhost:5000/uploads/users/" + user.picture);
    } else {
      setPic("");
    }
  }, [user]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {!user ? (
            <Modal.Title>{"New " + roleName(role)}</Modal.Title>
          ) : (
            <Modal.Title>{"Edit " + roleName(role)}</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              try {
                const formData = new FormData();
                let adminData = {};
                if (role === "employee") {
                  for (let field in values) {
                    if (
                      // field === "pictureRequired" ||
                      field === "passwordRequired" ||
                      (field === "picture" && values[field] === null) ||
                      field === "professionRequired"
                    ) {
                      continue;
                    } else {
                      formData.append(field, values[field]);
                    }
                  }
                  for (let i of formData.entries()) {
                    console.log(i[0] + " => " + i[1]);
                  }
                } else {
                  adminData = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                    dateOfBirth: values.dateOfBirth,
                    address: values.address,
                  };
                }

                if (user) {
                  console.log(user);
                  const validPassword = await verifyPassword(
                    user._id,
                    values.password
                  );
                  console.log(validPassword);
                  if (validPassword.data) {
                    const done = await axios.put(
                      `${process.env.REACT_APP_API_URL}/${role}s/${user._id}`,
                      role === "employee" ? formData : adminData,
                      role === "employee"
                        ? {
                          "Content-Type": "multipart/form-data",
                        }
                        : null
                    );
                    if (done) {
                      console.log(done);
                      props.setShow(false);
                      props.setInfo(null);
                      props.setRefresh(true);
                      toast.success("User updated Successfully");
                    }
                  } else {
                    console.log(passwordRef.current);
                    passwordRef.current.className =
                      "form-control  border-danger";
                    return toast.error("Enter your password correctly");
                  }
                } else {
                  for (let data of formData.entries()) {
                    console.log(data[0] + " => " + data[1]);
                  }
                  const done = await axios.post(
                    `${process.env.REACT_APP_API_URL}/${role}s`,
                    role === "employee" ? formData : adminData,
                    role === "employee"
                      ? {
                        "Content-Type": "multipart/form-data",
                      }
                      : null
                  );

                  if (done) {
                    console.log(done);
                    props.setShow(false);
                    props.setInfo(null);
                    props.setRefresh(true);
                    toast.success("User Added Successfully");
                  }
                }

                actions.setSubmitting(false);
              } catch (err) {
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
              }
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
                encType={role === "admin" ? null : "multipart/form-data"}
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
                    md="12"
                    controlId="validationFormikUsername2"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* password field */}
                  <Form.Group as={Col} md="6" controlId="validationFormik103">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      ref={passwordRef}
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

                  {/* profession field */}
                  {role === "employee" ? (
                    <Form.Group as={Col} md="6" controlId="validationFormik110">
                      <Form.Label>Profession</Form.Label>
                      <Form.Control
                        as="select"
                        name="profession"
                        value={values.profession}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.profession && !!errors.profession}
                      >
                        <option value="">Select Profession</option>
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
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik104">
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
                  <Form.Group as={Col} md="6" controlId="validationFormik114">
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
                  <Form.Group as={Col} md="12" controlId="validationFormik105">
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
                {role === "employee" ? (
                  <Form.Group>
                    {user && user.picture ? (
                      <Image
                        src={pic}
                        roundedCircle
                        className="mr-2"
                        style={{ width: 120, height: 120 }}
                      />
                    ) : null}
                    <Form.File
                      className="position-relative"
                      required
                      name="picture"
                      label="Picture"
                      onChange={(e) => {
                        values.picture = e.target.files[0];
                        setPic(URL.createObjectURL(values.picture));
                      }}
                      onBlur={handleBlur}
                      isInvalid={touched.picture && !!errors.picture}
                      feedback={errors.picture}
                      id="validationFormik107"
                      feedbackTooltip
                    />
                  </Form.Group>
                ) : null}

                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit" className="ml-1">
                  Save
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileForm;
