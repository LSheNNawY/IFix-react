import React, { useState, useEffect } from "react";
import axios from "axios";
// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";

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
            /*  console.log(res.data);
      console.log(res.data[1].client.phone); */
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
                                            <th className="border-0">
                                                {" "}
                                                Employee_Name{" "}
                                            </th>
                                           {/*  <th className="border-0">
                                                {" "}
                                                Employee_Phone{" "}
                                            </th> */}
                                            <th className="border-0">
                                                {" "}
                                                Client_Name{" "}
                                            </th>
                                            {/* <th className="border-0">
                                                {" "}
                                                Client_Phone{" "}
                                            </th> */}
                                            <th className="border-0">
                                                {" "}
                                                Profession{" "}
                                            </th>
                                            <th className="border-0">
                                                {" "}
                                                Service_Title{" "}
                                            </th>
                                           {/*  <th className="border-0">
                                                {" "}
                                                Service_Price{" "}
                                            </th> */}
                                            <th className="border-0">
                                                {" "}
                                                Warranty{" "}
                                            </th>
                                            <th className="border-0">
                                                {" "}
                                                Payment Method{" "}
                                            </th>
                                            {/* <th className="border-0"> Description </th> */}
                                            <th className="border-0">
                                                {" "}
                                                Price{" "}
                                            </th>
                                            <th className="border-0">
                                                {" "}
                                                Actions{" "}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobs.map((job, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td> {index + 1} </td>

                                                    <td>

                                                        {job.employee && job.employee
                                                            .firstName +
                                                            " " +
                                                            job.employee
                                                                .lastName}
                                                    </td>

                                                   {/*  <td>
                                                        {job.employee && job.employee.phone}
                                                    </td> */}

                                                    <td>
                                                        { job.client && job.client.firstName +
                                                            " " +
                                                            job.client.lastName}
                                                    </td>

                                                   {/*  <td>{job.client && job.client.phone}</td> */}

                                                    <td>
                                                        {job.profession
                                                            ? job.profession
                                                                  .title
                                                            : "-"}
                                                    </td>

                                                    <td>
                                                        {job.profession &&
                                                        job.profession
                                                            .services &&
                                                        job.profession.services
                                                            .length > 0 ? (
                                                            job.profession.services.map(
                                                                (
                                                                    service,
                                                                    i
                                                                ) => {
                                                                    return (
                                                                        <p>
                                                                            {
                                                                                job
                                                                                    .profession
                                                                                    .services[
                                                                                    i
                                                                                ]
                                                                                    .service
                                                                            }
                                                                        </p>
                                                                    );
                                                                }
                                                            )
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </td>
                                                   {/*  <td>
                                                        {job.profession &&
                                                        job.profession
                                                            .services &&
                                                        job.profession.services
                                                            .length > 0 ? (
                                                            job.profession.services.map(
                                                                (
                                                                    service,
                                                                    i
                                                                ) => {
                                                                    return (
                                                                        <p>
                                                                            {" "}
                                                                            {
                                                                                job.profession.services[i].price
                                                                            }
                                                                        </p>
                                                                    );
                                                                }
                                                            )
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </td> */}

                                                    <td> {job.warranty} </td>
                                                    <td>
                                                        {" "}
                                                        { job.payment_method }{" "}
                                                    </td>
                                                    {/*  <td> {job.description} </td> */}
                                                    <td> {job.price} </td>
                                                    <td>
                                                        <Button
                                                            className="btn btn-danger mr-1"
                                                            onClick={() =>
                                                                deleteUser(
                                                                    job._id
                                                                )
                                                            }
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
