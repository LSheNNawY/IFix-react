import React, { useState, useEffect } from "react";
import axios from "axios";
// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

function Jobs() {
  const history = useHistory
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const userId = searchParams.get("userId");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const query = userId? `/jobs?userId=${userId}` : '/jobs';
    axios.get(process.env.REACT_APP_API_URL + query).then((res) => {
      setJobs(res.data);
    });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure..?")) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/jobs/${id}`)
        .then(({ data }) => {
          console.log("data will delete = ", data);
          setJobs((old) => old.filter((job) => job._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Jobs Table</Card.Title>
                <p className="card-category">control</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0"> # </th>
                      <th className="border-0"> Employee_Name </th>
                      <th className="border-0"> Client_Name </th>
                      <th className="border-0"> Profession </th>
                      <th className="border-0"> Service_Title </th>
                      <th className="border-0"> Warranty </th>
                      <th className="border-0"> Payment Method </th>
                      <th className="border-0"> Price </th>
                      <th className="border-0"> Actions </th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, index) => {
                      return (
                        <tr key={index}>
                          <td> {index + 1} </td>

                          <td>
                            {job.employee &&
                              job.employee.firstName +
                                " " +
                                job.employee.lastName}
                          </td>

                          {/*<td>
                                {job.employee && job.employee.phone}
                            </td> */}

                          <td>
                            {job.client &&
                              job.client.firstName + " " + job.client.lastName}
                          </td>

                          {/*  <td>{job.client && job.client.phone}</td> */}

                          <td>{job.profession ? job.profession.title : "-"}</td>

                          <td>{job.service ? job.service : "-"}</td>

                          <td> {job.warranty} </td>
                          <td> {job.payment_method} </td>

                          <td> {job.price} </td>
                          <td>
                            <Button
                              className="btn btn-danger mr-1"
                              onClick={() => deleteUser(job._id)}
                            >
                              <i className="fa fa-trash"></i>
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
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
