import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

export default function Employees() {
    const [employees, setEmployees] = useState([]);

    const handleLockEmployee = (id, status) => {
        axios
            .put(`${process.env.REACT_APP_API_URL}/employees/${id}/${status}`)
            .then(({ data }) => {
                setEmployees((oldEmployees) => {
                    const newEmployees = oldEmployees.filter((employee) => {
                        if (employee._id === id) employee.status = data.status;
                        return employee;
                    });

                    return newEmployees;
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDeleteEmployee = (id) => {
        if (window.confirm("Are you sure?")) {
            axios
                .delete(`${process.env.REACT_APP_API_URL}/employees/${id}`)
                .then(({ data }) => {
                    setEmployees((oldAdmins) =>
                        oldAdmins.filter((employee) => employee._id !== id)
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleAddEmployee = () => {
        console.log("add");
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/employees`)
            .then(({ data }) => {
                setEmployees(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                            <Card.Title as="h4">Employees</Card.Title>
                            <p className="card-category">control</p>
                            <div className="float-right">
                                <button
                                    className="btn btn-primary"
                                    title="Add"
                                    onClick={() => {
                                        handleAddEmployee();
                                    }}
                                >
                                    <i className="fa fa-plus"></i> New Employee
                                </button>
                            </div>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive px-0">
                            <Table className="table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th className="border-0">#</th>
                                        <th className="border-0">First name</th>
                                        <th className="border-0">Last name</th>
                                        <th className="border-0">Email</th>
                                        <th className="border-0">
                                            Phone number
                                        </th>
                                        <th className="border-0">Profession</th>
                                        <th className="border-0">Status</th>
                                        <th className="border-0">Joined</th>
                                        <th className="border-0">Controls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee, index) => {
                                        return (
                                            <tr key={employee._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {employee.firstName.toLowerCase()}
                                                </td>
                                                <td>
                                                    {employee.lastName.toLowerCase()}
                                                </td>
                                                <td>{employee.email}</td>
                                                <td>{employee.phone}</td>
                                                <td>{employee.profession? employee.profession.title : "-" }</td>
                                                <td>
                                                    <span
                                                        className={
                                                            employee.status ===
                                                            "active"
                                                                ? "badge bg-success text-light"
                                                                : "badge bg-danger text-light"
                                                        }
                                                    >
                                                        {employee.status}
                                                    </span>
                                                </td>
                                                <td>{employee.created_at}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger mr-1"
                                                        title="Delete"
                                                        onClick={() =>
                                                            handleDeleteEmployee(
                                                                employee._id
                                                            )
                                                        }
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                    {employee.status ===
                                                        "blocked" &&
                                                    employee.status !==
                                                        "pending interview" ? (
                                                        <button
                                                            className="btn btn-info"
                                                            title="Unblock"
                                                            onClick={() =>
                                                                handleLockEmployee(
                                                                    employee._id,
                                                                    "unblock"
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-lock-open"></i>
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn btn-info"
                                                            title="Block"
                                                            onClick={() =>
                                                                handleLockEmployee(
                                                                    employee._id,
                                                                    "block"
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-lock"></i>
                                                        </button>
                                                    )}
                                                    {employee.status ===
                                                    "pending interview" ? (
                                                        <button
                                                            className="btn btn-success ml-1"
                                                            title="Activate"
                                                            onClick={() =>
                                                                handleLockEmployee(
                                                                    employee._id,
                                                                    "unblock"
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-user-check"></i>
                                                        </button>
                                                    ) : null}
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
    );
}
