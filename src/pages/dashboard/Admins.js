import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

export default function Admins() {
    const [admins, setAdmins] = useState([]);

    const handleLockAdmin = (id, status) => {
        axios
            .put(`${process.env.REACT_APP_API_URL}/admins/${id}/${status}`)
            .then(({ data }) => {
                setAdmins((oldAdmins) => {
                    const newAdmins = oldAdmins.filter((admin) => {
                        if (admin._id === id) admin.status = data.status;
                        return admin;
                    });

                    return newAdmins;
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDeleteAdmin = (id) => {
        if (window.confirm("Are you sure?")) {
            axios
                .delete(`${process.env.REACT_APP_API_URL}/admins/${id}`)
                .then(({ data }) => {
                    setAdmins((oldAdmins) =>
                        oldAdmins.filter((admin) => admin._id !== id)
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleEditAdmin = (id) => {
        console.log(id);
    };

    const handleAddAdmin = () => {
        console.log("add");
    };

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/admins`)
            .then(({ data }) => {
                setAdmins(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Admins</Card.Title>
                                <p className="card-category">control</p>
                                <div className="float-right">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            handleAddAdmin();
                                        }}
                                    >
                                        <i className="fa fa-plus"></i> New Admin
                                    </button>
                                </div>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">#</th>
                                            <th className="border-0">
                                                First name
                                            </th>
                                            <th className="border-0">
                                                Last name
                                            </th>
                                            <th className="border-0">Email</th>
                                            <th className="border-0">
                                                Phone number
                                            </th>
                                            <th className="border-0">Staus</th>
                                            <th className="border-0">Joined</th>
                                            <th className="border-0">
                                                Controls
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {admins.map((admin, index) => {
                                            return (
                                                <tr key={admin._id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {admin.firstName.toLowerCase()}
                                                    </td>
                                                    <td>
                                                        {admin.lastName.toLowerCase()}
                                                    </td>
                                                    <td>{admin.email}</td>
                                                    <td>{admin.phone}</td>
                                                    <td>
                                                        <span
                                                            className={
                                                                admin.status ===
                                                                "active"
                                                                    ? "badge bg-success text-light"
                                                                    : "badge bg-danger text-light"
                                                            }
                                                        >
                                                            {admin.status}
                                                        </span>
                                                    </td>
                                                    <td>{admin.created_at}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-warning mr-1"
                                                            onClick={() => {
                                                                handleEditAdmin(
                                                                    admin._id
                                                                );
                                                            }}
                                                        >
                                                            <i className="fa fa-pen"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-danger mr-1"
                                                            onClick={() =>
                                                                handleDeleteAdmin(
                                                                    admin._id
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-trash"></i>
                                                        </button>
                                                        {admin.status ===
                                                        "active" ? (
                                                            <button
                                                                className="btn btn-info"
                                                                onClick={() =>
                                                                    handleLockAdmin(
                                                                        admin._id,
                                                                        "block"
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-lock"></i>
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className="btn btn-info"
                                                                onClick={() =>
                                                                    handleLockAdmin(
                                                                        admin._id,
                                                                        "unblock"
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-lock-open"></i>
                                                            </button>
                                                        )}
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
        <Container fluid>
            <Row>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                            <Card.Title as="h4">Admins</Card.Title>
                            <p className="card-category">control</p>
                            <div className="float-right">
                                <button
                                    className="btn btn-primary"
                                    title="Add"
                                    onClick={() => {
                                        handleAddAdmin();
                                    }}
                                >
                                    <i className="fa fa-plus"></i> New Admin
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
                                        <th className="border-0">Status</th>
                                        <th className="border-0">Joined</th>
                                        <th className="border-0">Controls</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.map((admin, index) => {
                                        return (
                                            <tr key={admin._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {admin.firstName.toLowerCase()}
                                                </td>
                                                <td>
                                                    {admin.lastName.toLowerCase()}
                                                </td>
                                                <td>{admin.email}</td>
                                                <td>{admin.phone}</td>
                                                <td>
                                                    <span
                                                        className={
                                                            admin.status ===
                                                            "active"
                                                                ? "badge bg-success text-light"
                                                                : "badge bg-danger text-light"
                                                        }
                                                    >
                                                        {admin.status}
                                                    </span>
                                                </td>
                                                <td>{admin.created_at}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-warning mr-1"
                                                        onClick={() => {
                                                            handleEditAdmin(
                                                                admin._id
                                                            );
                                                        }}
                                                    >
                                                        <i className="fa fa-pen"></i>
                                                    </button>
                                                    <button
                                                        className="btn btn-danger mr-1"
                                                        title="Delete"
                                                        onClick={() =>
                                                            handleDeleteAdmin(
                                                                admin._id
                                                            )
                                                        }
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                    {admin.status ===
                                                    "active" ? (
                                                        <button
                                                            className="btn btn-info"
                                                            title="Block"
                                                            onClick={() =>
                                                                handleLockAdmin(
                                                                    admin._id,
                                                                    "block"
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-lock"></i>
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn btn-info"
                                                            title="Unblock"
                                                            onClick={() =>
                                                                handleLockAdmin(
                                                                    admin._id,
                                                                    "unblock"
                                                                )
                                                            }
                                                        >
                                                            <i className="fa fa-lock-open"></i>
                                                        </button>
                                                    )}
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
