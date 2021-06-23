import { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import UserContext from "../context/UserContext";

import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";

import "react-datepicker/dist/react-datepicker.css";

import "../assets/front/css/login.css";

const checkServiceAvailability = (arr, service) => {
    return arr.some( (ser) =>  {
        return service === ser.service;
    });
}

const Order = () => {
    const { user } = useContext(UserContext);
    const [loggedUser, setLoggedUser] = useState({});
    const [services, setServices] = useState([]);
    const [service, setService] = useState("");
    const [address, setAddress] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const history = useHistory();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const professionId = searchParams.get("prof");
    const employeeId = searchParams.get("emp");

    useEffect(() => {
        console.log(user);
        if (user === undefined || JSON.stringify(user) === "{}") {
            async function getUser() {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/users/current-user`
                );
                setLoggedUser(response.data);
                setAddress(response.data.address)
                if (JSON.stringify(response.data) === "{}") {
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
                // console.log(services.data);
                setServices(services.data);
            }
            getProfessionServices();
        } else {
            console.log("not found");
        }
    }, []);

    useEffect(() => {
        if (employeeId) {
            async function getEmployeeJobs() {
                const employee = await axios.get(
                    `${process.env.REACT_APP_API_URL}/employees/${employeeId}`
                );
                if(employee.data.jobs.length > 0) {
                    console.log(employee.data.jobs[employee.data.jobs.length - 1])
                    setStartDate(new Date(employee.data.jobs[employee.data.jobs.length - 1].created_at))
                }
            }
            getEmployeeJobs();
        } else {
            console.log("not found");
        }
    }, []);

    return (
        <div className="login-wrapper">
            <NavbarComponent />
            <div
                style={{
                    backgroundColor: "#ebeeef",
                    paddingTop: "120px",
                    paddingBottom: "120px",
                    marginTop: "-80px",
                }}
            >
                <div className="container ">
                    <div className="row">
                        <div className=" login-form col-md-8">
                            <div className="login-form-title">
                                <span className="login-form-title-1">
                                    Order
                                </span>
                            </div>

                            <form>
                                <div className="form-group ">
                                    <label htmlFor="inputService">
                                        Service
                                    </label>
                                    <select
                                        id="inputService"
                                        className="form-control"
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
                                !checkServiceAvailability(services, service)) && service !== "" ? (
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            Service Description
                                        </label>
                                        <textarea
                                            onChange={(e) => {
                                                setService(e.target.value);
                                            }}
                                            className="form-control"
                                            name="description"
                                            id="description"
                                            cols="30"
                                            rows="20"
                                            style={{
                                                border: "1px solid #000",
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
                                        <option value="other">
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
                                            className="form-control"
                                            name="address"
                                            id="address"
                                            cols="30"
                                            rows="20"
                                            style={{
                                                border: "1px solid #000",
                                                height: "100px",
                                            }}
                                        ></textarea>
                                    </div>
                                ) : null}

                                <div className="form-group">
                                    <label htmlFor="inputAddress">
                                        Start Date
                                    </label>
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
