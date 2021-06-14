import React, { useState, useEffect } from "react";
import axios from "axios";
// react-bootstrap components
import { 
  Card, 
  Table, 
  Container, 
  Row, 
  Col, 
  Button } from "react-bootstrap";

// const ajaxJobs = async () => {
//   const data = await (
//     await fetch(`${process.env.REACT_APP_API_URL}/jobs`)
//   ).json();
//   return data;
// };

function Jobs() {
  /* const [jobs, setJobs] = useState([]);

  useEffect(() => {
    ajaxJobs().then((data) => {
      
        setJobs(data);
        console.log("data jobs: ",data);
      
      
      
    });
  }, []); */

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/jobs").then((res) => {
      setJobs(res.data);
      console.log(res.data);
    });
  }, []);

 /*  const deleteUser = (id) => {
    setJobs(jobs.filter((job) => job.id !== id))
  } */

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Jobs Table</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0"> ID </th>
                      <th className="border-0"> Employee </th>
                      <th className="border-0"> Client </th>
                      <th className="border-0"> Profession </th>
                      <th className="border-0"> Services </th>
                      <th className="border-0"> Warranty </th>
                      <th className="border-0"> Payment Method </th>
                      {/* <th className="border-0"> Description </th> */}
                      <th className="border-0"> Price </th>
                      <th className="border-0"> Actions </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.length > 0 ? (
                      jobs.map((job, index) => {
                        return (
                          <tr key={index}>
                            <td> {index + 1} </td>
                            <td>
                              <table table-hover table-striped>
                                <thead>
                                  <tr>
                                    <th className="border-0"> Name </th>
                                    <th className="border-0"> Phone </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {job.client.length > 0 ? (
                                    job.client.map((client, i) => {
                                      return (
                                        <tr>
                                          <td>
                                            {job.client[i].firstName +
                                              job.client[i].lastName}
                                          </td>
                                          <td>{job.client[i].phone}</td>
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
                              <table table-hover table-striped>
                                <thead>
                                  <tr>
                                    <th className="border-0"> Name </th>

                                    <th className="border-0"> Phone </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {job.employee.length > 0 ? (
                                    job.employee.map(
                                      (employee, i) => {
                                        return (
                                          <tr>
                                            <td>
                                              {job.employee[i].firstName}
                                            </td>

                                            <td>
                                              {job.employee[i].phone}
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )
                                  ) : (
                                    <></>
                                  )}
                                </tbody>
                              </table>
                            </td>

                            <td>
                              <table table-hover table-striped>
                                <thead>
                                  <tr>
                                    <th className="border-0"> Title </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {job.profession.length > 0 ? (
                                    job.profession.map((profession, i) => {
                                      return (
                                        <tr>
                                          <td>{job.profession[i].title}</td>
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
                              <table table-hover table-striped>
                                <thead>
                                  <tr>
                                    <th className="border-0"> Title </th>

                                    <th className="border-0"> Price </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {job.profession.services.length > 0 ? (
                                    job.profession.services.map(
                                      (service, i) => {
                                        return (
                                          <tr>
                                            <td>
                                              {job.profession.services[i].title}
                                            </td>

                                            <td>
                                              {job.profession.services[i].price}
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )
                                  ) : (
                                    <></>
                                  )}
                                </tbody>
                              </table>
                            </td>
                            <td> {job.warranty} </td>
                            <td> {job.payment_method} </td>
                            {/*  <td> {job.description} </td> */}
                            <td> {job.price} </td>
                            <td>
                              <Button variant="danger">Delete</Button>{" "}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="8">Wait for loading..</td>
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

export default Jobs;
