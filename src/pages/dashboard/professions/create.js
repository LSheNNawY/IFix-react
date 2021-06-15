import React from 'react';
import { Formik } from 'formik';
import axios from "axios";
import * as yup from "yup";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";


const Profisson = () => (
    <div>
        <div className="float-right">
            <button  to="/new"className="btn btn-primary">
                <i className="fa fa-plus"></i> <Link to="/admin/new">New Service</Link>
            </button>
        </div>
        <Formik
            onSubmit={async ( values, actions ) => {
            console.log(values);
            console.log(actions);
            actions.setSubmitting(true)
            try {
                const formData = new FormData();
                for (let field in values) {
                    formData.append(field, values[field]);
                }
                console.log(formData)

                // const added = await axios.post(process.env.REACT_APP_API_URL + "/professions", formData, {
                //     "Content-Type": "multipart/form-data",
                // });
                // if(added) {
                //     console.log(added);
                // }
                actions.setSubmitting(false);
            } catch (error) {
                console.error(error);
            }}}
            initialValues={{
                title: "",
                img: null,
                service: "",
                description:"",
                price: 0
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                <Form noValidate encType="multipart/form-data" onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6" controlId="validationFormik101">
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

                    <Form.Group>
                        <Form.File
                            className="position-relative"
                            required
                            name="img"
                            label="img"
                            onChange={e => values.img = e.target.files[0]}
                            onBlur={handleBlur}
                            id="validationFormik107"

                        />
                    </Form.Group>

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

                    <Button type="submit">Save</Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Profisson;