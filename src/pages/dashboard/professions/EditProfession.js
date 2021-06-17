import {
    Button,
    Col,
    Container,
    Form,
    Modal,
} from "react-bootstrap";
import React, { useState } from "react";
import { render } from "@testing-library/react";
import { Formik } from "formik";
import axios from "axios";
import ModalDialog from "react-bootstrap/ModalDialog";
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().min(3).max(15).required("Title Required"),
    img: yup.string().required("Img Required"),
});

function EditProfession(props) {
    const { profession,setProfession, show, onHide} = props;

    const handleUpdateProfession = async (data) => {
        await axios
            .put(
                process.env.REACT_APP_API_URL + "/professions/" + profession._id,
                data,
                {
                    "Content-Type": "multipart/form-data",
                }
            )
            .then(({data}) => {

                setProfession(data);
                onHide();
                console.log(data)
            });
    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="show-grid">
                <Container className="mt-3 w-100">
                    <h2 className="mt-4 mb-4 text-center">Edit Profession</h2>
                    <Formik
                        validationSchema={schema}
                        onSubmit={async (values, actions) => {
                            actions.setSubmitting(true);
                            try {
                                const formData = new FormData();
                                console.log(values)
                                for (let field in values) {
                                    formData.append(field, values[field]);
                                }
                                handleUpdateProfession(formData)

                                actions.setSubmitting(false);
                            } catch (error) {
                                console.error(error);
                            }
                        }}
                        initialValues={{
                            title:profession.title,
                            img:profession.img,
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
                                            placeholder="Title"
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
                                        <label>Image</label>
                                        <Form.File
                                            className="position-relative"
                                            required
                                            id="custom-file"
                                            name="img"
                                            label=""
                                            placeholder="Image"
                                            custom
                                            onChange={(e) => (values.img = e.target.files[0])}
                                            onBlur={handleBlur}
                                            isInvalid={touched.img && errors.img}
                                            feedback={errors.img}
                                            feedbackTooltip
                                        />
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
            </Modal.Body>
        </Modal>
    );
}

export default EditProfession;