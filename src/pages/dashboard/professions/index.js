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
                      <td colSpan="3" className="border-0 text-center">
                        Professions
                      </td>
                      <td colSpan="3" className="border-0 text-center">
                        Services
                      </td>
                    </tr>
                    <tr>
                      <td className="border-0">ID </td>
                      <td className="border-0">Title </td>
                      <td className="border-0">Image </td>
                      <td className="border-0">Title </td>
                      <td className="border-0">Description </td>
                      <td className="border-0">Price </td>
                      <td className="border-0">Actions </td>
                    </tr>
                  </thead>
                  <tbody>
                    {professions.length > 0 ? (
                      professions.map((profession, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{profession.title}</td>
                            <td>{profession.img}</td>
                            {profession.services.length > 0 ? (
                              <>
                                <td>{profession.services[index].title}</td>
                                <td>
                                  {profession.services[index].description}
                                </td>
                                <td>{profession.services[index].price}</td>
                              </>
                            ) : (
                              <>
                                <td></td>
                                <td></td>
                                <td></td>
                              </>
                            )}
                            <td>
                              <a href="/">
                                <Button variant="primary">Edit</Button>{" "}
                              </a>
                              <a href="/">
                                <Button variant="danger">Delete</Button>{" "}
                              </a>
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
