import axios from "axios";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// const schema = yup.object().shape({
//   firstName: yup.string().min(3).max(15).required("First Name Required"),
//   lastName: yup.string().min(3).max(15).required("Last Name Required"),
//   email: yup.string().email("Invalid Email").required("Email Required"),
//   password: yup.string().min(6).required("Password Required"),
//   phone: yup
//     .string()
//     .matches(/^01[0125][0-9]{8}$/gm, "Invalid Phone Number")
//     .required("Phone Required"),
//   address: yup.string().required("Address Required"),
//   dateOfBirth: yup.date(),
//   profession: yup.string().required("Profession Required"),
//   picture: yup.mixed().required("Picture Required"),
// });

function Profession() {
    return (
        <>
            <Container className="mt-5 w-50">
                <h1 className="mt-4 mb-4">Create Profession</h1>
                <Formik
                    // validationSchema={schema}
                    onSubmit={async (values, actions) => {
                        // console.log(values);
                        // console.log(actions);
                        actions.setSubmitting(true);
                        try {
                            let serviceData = {};
                            const formData = new FormData();
                            for (let field in values) {
                                // formData.append(field, values[field]);
                                if (["service", "description", "price"].indexOf(field) !== -1) {
                                    Object.assign(serviceData, { [field]: values[field] });
                                }else{
                                    formData.append(field, values[field]);
                                }
                            }
                            formData.append("services",JSON.stringify([serviceData]));
                            const added = await axios.post(
                                process.env.REACT_APP_API_URL + "/professions",
                                formData,
                                {
                                    "Content-Type": "multipart/form-data",
                                }
                            );
                            if (added) {
                                console.log(added);
                                // history.push("/");
                            }
                            actions.setSubmitting(false);
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                    initialValues={{
                        title: "",
                        img: null,
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
                                <Form.Group as={Col} md="10" controlId="validationFormik101">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="10" controlId="validationFormik102">
                                    <Form.File
                                        className="position-relative"
                                        required
                                        name="img"
                                        label="image"
                                        onChange={(e) => (values.img = e.target.files[0])}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="4" controlId="validationFormik102">
                                    <Form.Label>service</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="service"
                                        name="service"
                                        value={values.service}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik103">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="description"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="validationFormik104">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="price"
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Button type="submit">Submit form</Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </>
    );
}

export default Profession;