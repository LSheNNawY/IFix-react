import React, { useState, useEffect } from "react";

// react-bootstrap components
import { 
    Card, 
    Table, 
    Container, 
    Row, 
    Col } from "react-bootstrap";

const ajaxJobs = async () => {
  const data = await (
    await fetch(`${process.env.REACT_APP_API_URL}/jobs`)
  ).json();
  return data;
};

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    ajaxJobs().then((data) => {
      setJobs(data);
      console.log(data);
    });
  }, []);

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
                      <th className="border-0">Client</th>
                      <th className="border-0">Employee</th>
                      <th className="border-0">Profession</th>
                      <th className="border-0">Service</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr>
                        job={job} key={job._id}
                        <td>{job.client}</td>
                        <td>{job.employee}</td>
                        <td>{job.profession}</td>
                        <td>{job.service}</td>
                        <td>{job.price}</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
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
