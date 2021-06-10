import axios from "axios";
import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import NavbarComponent from "../components/front/NavbarComponent";

const Register = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        dateOfBirth: "",
        profession: "",
    });
    const [profilePic, setProfilePic] = useState("");
    const [professions, setProfessions] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prevData) => ({...prevData, [name]: value}));
    };


    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + "/professions").then((res) => {
            setProfessions(res.data);
        });
    }, []);

    const register = async (e) => {
        e.preventDefault();

        console.log(data);
        try {
            const formData = new FormData();
            for (let key in data) {
                formData.append(key, data[key]);
            }
            formData.append("picture", profilePic);

            for (let key of formData.entries()) {
                console.log(key[0] + " " + key[1]);
            }
            await axios.post(process.env.REACT_APP_API_URL + "/users", formData, {
                "Content-Type": "multipart/form-data",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <NavbarComponent/>
            <Container className="mt-5 w-50">
                <Row className="text-center">
                    <Col>
                        <h1>Register</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={register} encType="multipart/form-data">
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter First Name"
                                    onChange={handleChange}
                                    value={data.firstName}
                                />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter Last Name"
                                    onChange={handleChange}
                                    value={data.lastName}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    value={data.email}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={data.password}
                                />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    name="phone"
                                    type="text"
                                    placeholder="Enter Phone xxx-xxxx-xxxx"
                                    onChange={handleChange}
                                    value={data.phone}
                                />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    name="address"
                                    type="text"
                                    placeholder="Enter Address"
                                    onChange={handleChange}
                                    value={data.address}
                                />
                            </Form.Group>
                            <Form.Group controlId="dateOfBirth">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control
                                    name="dateOfBirth"
                                    type="date"
                                    onChange={handleChange}
                                    value={data.dateOfBirth}
                                />
                            </Form.Group>
                            <Form.Group controlId="profession">
                                <Form.Label>Profession</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={handleChange}
                                    value={data.profession}
                                    name="profession"
                                >
                                    {professions.map((profession) => (
                                        <option value={profession._id} key={profession._id}>
                                            {profession.title}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.File
                                    id="picture"
                                    label="Profile Picture"
                                    onChange={(e) => setProfilePic(e.target.files[0])}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;
