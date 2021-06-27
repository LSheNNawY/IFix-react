import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import DatePicker from "react-datepicker";

import UserContext from "../context/UserContext";

import { notify } from "../helpers/generalFunctions";

import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";

import "react-datepicker/dist/react-datepicker.css";

import "../assets/front/css/login.css";

const checkServiceAvailability = (arr, service) => {
    return arr.some((ser) => {
        return service === ser.service;
    });
};

const Order = () => {
    const { user } = useContext(UserContext);
    const [loggedUser, setLoggedUser] = useState({});
    const [services, setServices] = useState([]);
    const [service, setService] = useState("");
    const [address, setAddress] = useState("other");
    const [startDate, setStartDate] = useState(new Date());
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);

    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const professionId = searchParams.get("prof");
    const employeeId = searchParams.get("emp");

    const handleClose = () => setShowModal(false);

    const handleValidation = (e) => {
        e.preventDefault();
        setErrors({});
        let errObj = {};

        if (!service || service === "other")
            errObj.service = "Service is required";

        if (!address || address === "other")
            errObj.address = "Address is required";

        setErrors(errObj);
        if (JSON.stringify(errObj) === "{}") {
            setShowModal(true);
        }
    };

    const handleSubmit = (e) => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/jobs`, {
                client: loggedUser.id,
                employee: employeeId,
                profession: professionId,
                service,
                address,
                price: 50,
            })
            .then(({ data }) => {
                console.log(data);
                handleClose();
                setSuccessMsg(true);
                notify(
                    "💥 Order created successfully, we will contact you",
                    "success",
                    history,
                    "/"
                );
            })
            .catch(() => {
                notify(
                    "💥 Error creating order, please try again later",
                    "error"
                );
            });
    };

    useEffect(() => {
        if (!user || user === undefined || JSON.stringify(user) === "{}") {
            async function getUser() {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/users/current-user`
                );
                setLoggedUser(response.data);
                if (!response.data || response.data === undefined) {
                    history.push(
                        `/login?prof=${professionId}&emp=${employeeId}`
                    );
                } else if (response.data.role === "employee") {
                    history.push("/");
                } else {
                    console.log(response.data);
                }
            }
            getUser();
        } else {
            setLoggedUser(user);
        }
    }, []);

    // get services of profession
    useEffect(() => {
        if (professionId) {
            async function getProfessionServices() {
                const services = await axios.get(
                    `${process.env.REACT_APP_API_URL}/professions/${professionId}?services=true`
                );
                setServices(services.data);
            }
            getProfessionServices();
        } else {
            console.log("not found");
        }
    }, []);

    return (
        <div className="login-wrapper">
            <NavbarComponent />

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms and conditions.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>fees ......</li>
                        <li>cond. 5</li>
                        <li>cond. 4</li>
                        <li>cond. 3</li>
                        <li>cond. 2</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            <div
                style={{
                    backgroundColor: "#ebeeef",
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    marginTop: "-80px",
                }}
            >
                <div className="container ">
                    <div className="col-12">
                        {successMsg ? <ToastContainer /> : null}
                    </div>
                    <div className="row">
                        <div className=" login-form col-md-8">
                            <div className="login-form-title">
                                <span className="login-form-title-1">
                                    Order
                                </span>
                            </div>

                            <form onSubmit={(e) => handleValidation(e)}>
                                <div className="form-group ">
                                    <label htmlFor="inputService">
                                        Service
                                    </label>
                                    <select
                                        id="inputService"
                                        className={
                                            errors.service
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={(e) => {
                                            setService(e.target.value);
                                        }}
                                    >
                                        <option value="">-- Select --</option>
                                        {services &&
                                            services.map((service) => (
                                                <option
                                                    value={service.service}
                                                    key={service._id}
                                                >
                                                    {service.service}
                                                </option>
                                            ))}
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {(service === "other" ||
                                    !checkServiceAvailability(
                                        services,
                                        service
                                    )) &&
                                service !== "" ? (
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            Service Description
                                        </label>
                                        <textarea
                                            onChange={(e) => {
                                                setService(e.target.value);
                                            }}
                                            className={
                                                errors.service
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            name="description"
                                            id="description"
                                            cols="30"
                                            rows="20"
                                            style={{
                                                border: errors.service
                                                    ? "1px solid #F00"
                                                    : "1px solid #000",
                                                height: "100px",
                                            }}
                                        ></textarea>
                                    </div>
                                ) : null}

                                <div className="form-group ">
                                    <label htmlFor="address">Address</label>
                                    <select
                                        id="address"
                                        className="form-control"
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                    >
                                        <option value={loggedUser.address}>
                                            {loggedUser.address}
                                        </option>
                                        <option
                                            value="other"
                                            selected="selected"
                                        >
                                            Another address
                                        </option>
                                    </select>
                                </div>

                                {address === "other" ||
                                address !== loggedUser.address ? (
                                    <div className="form-group">
                                        <label htmlFor="address">
                                            Another Address
                                        </label>
                                        <textarea
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }}
                                            className={
                                                errors.address
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            name="address"
                                            id="address"
                                            cols="30"
                                            rows="20"
                                            style={{
                                                border: errors.address
                                                    ? "1px solid #F00"
                                                    : "1px solid #000",
                                                height: "100px",
                                            }}
                                        ></textarea>
                                    </div>
                                ) : null}

                                <div className="form-group">
                                    <label htmlFor="inputAddress">Date</label>
                                    <br />
                                    {/* <input
                                        type="date"
                                        className="form-control"
                                    /> */}
                                    <DatePicker
                                        minDate={startDate}
                                        className="form-control"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    {/* ); */}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary site-btn"
                                >
                                    Order
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default Order;
