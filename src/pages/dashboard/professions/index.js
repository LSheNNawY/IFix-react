import React, { useEffect, useState } from "react";
import axios from "axios";

// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";

function Professions() {
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/professions").then((res) => {
      setProfessions(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Professions</Card.Title>
                {/* <p className="card-category">
                                    Here is a subtitle for this table
                                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0"> ID </th>
                      <th className="border-0"> Title </th>
                      <th className="border-0"> Image </th>
                      <th className="border-0"> Services </th>
                      <th className="border-0"> Actions </th>
                    </tr>
                  </thead>
                  <tbody>
                    {professions.length > 0 ? (
                      professions.map((profession, index) => {
                        return (
                          <tr key={index}>
                            <td> {index + 1} </td>
                            <td> {profession.title} </td>
                            <td> {profession.img} </td>
                            <td>
                              <table table-hover table-striped>
                                <thead>
                                  <tr>
                                    <th className="border-0"> Title </th>
                                    <th className="border-0"> Description </th>
                                    <th className="border-0"> Price </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {profession.services.length > 0 ? (
                                    profession.services.map((service, i) => {
                                      return (
                                        <tr>
                                          <td>
                                            {profession.services[i].title}
                                          </td>
                                          <td>
                                            {profession.services[i].description}
                                          </td>
                                          <td>
                                            {profession.services[i].price}
                                          </td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <></>
                                  )}
                                </tbody>
                              </table>
                            </td>
                            <td>
                              <Button variant="primary">Edit</Button>{" "}
                              <Button variant="danger">Delete</Button>{" "}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="5">Loading...</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Professions;
