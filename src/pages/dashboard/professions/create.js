import React from "react";
import $ from "jquery";

// react-bootstrap components
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
const handleCreateService = () => {
  // const row = document.getElementById("serviceCont")
  // const children=row.innerHTML;
  // console.log(children);
  // const input= document.createElement('div')
  // input.className="row";
  // input.innerHTML=children
  // row.append(input)

  let children = $("#serviceCont").children();
  let childrenres = children.map((i, child) => {
    if (i < 3) {
       return child
      // $("#serviceCont").append(child);
    }
  });
  $("#serviceCont").append(childrenres)
};

function Profession() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Profession</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form className="form">
                  <Row>
                    <Col className="pr-1" md="11">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          placeholder="Title"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="11">
                      <Form.Group>
                        <label>Image</label>
                        <Form.File
                          className="position-relative"
                          required
                          name="image"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <label>Services</label>
                    </Col>
                  </Row>
                  <Row  className="serviceCont">
                    <Col className="pr-1" md="3">
                      <Form.Group>
                        <label>Title</label>
                        <Form.Control
                          placeholder="Service Title"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>Description</label>
                        <Form.Control
                          placeholder=" Service Description"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pl-1" md="3">
                      <Form.Group>
                        <label>Price</label>
                        <Form.Control
                          placeholder="Service Price"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col>
                    <Button
                      className="btn-fill pull-right mt-3"
                      variant="info"
                      onClick={() => handleCreateService()}
                    >
                      +{" "}
                    </Button>
                  </Col>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Save
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profession;
