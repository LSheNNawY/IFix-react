import {
  Button,
  Col,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import React from "react";
import { Formik } from "formik";
import axios from "axios";
// import { useHistory } from "react-router-dom";
// import ModalDialog from "react-bootstrap/ModalDialog";

import * as yup from "yup";
const schema = yup.object().shape({
  service: yup.string().min(5).max(20).required("Service Required"),
  description: yup.string().min(10).required("Description Required"),
  Price: yup.number(),
});

function EditService (props) {
  const {  profession,setProfession,selectedService ,show, onHide } = props;



  const handleUpdateProfession = async (values) => {
    let data = {
      services:[values]
    };

    await axios
        .put(
            process.env.REACT_APP_API_URL + "/professions/" + profession._id,
            data,
            {
              "Content-Type": "multipart/form-data",
            }
        )
        .then(({data}) => {
            setProfession(data)
            onHide()
      });
  };

  return (
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body className="show-grid">
          <Container className="mt-3 w-100">
            <h2 className="mt-4 mb-4 text-center">Edit Service</h2>
            <Formik
                enableReinitialize={true}
                validationSchema={schema}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  try {
                    handleUpdateProfession(values);
                    actions.setSubmitting(false);
                  } catch (error) {
                    console.error(error);
                  }
                }}
                initialValues={{
                  service: selectedService.service,
                  description: selectedService.description,
                  price: selectedService.price,
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
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Group
                          as={Col}
                          md="5"
                          className="offset-1 "
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
                      <Form.Group as={Col} md="5" controlId="validationFormik104">
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
                      <Button type="submit" style={{ margin: "auto" }}>
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


export default EditService;
