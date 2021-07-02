import React, { useState, useContext } from "react";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import { Link, useHistory, useLocation } from "react-router-dom";
import { authFormValidation } from "../helpers/loginValidation";
import UserContext from "../context/UserContext";

import "../assets/front/css/login.css";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loggingError, setLoggingError] = useState("");
  const { getUser } = useContext(UserContext);

  const history = useHistory();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const professionId = searchParams.get("prof");
  const employeeId = searchParams.get("emp");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (authFormValidation(user.email, user.password, setErrors)) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, {
          email: user.email,
          password: user.password,
        })
        .then(({ data }) => {
          getUser();
          if (professionId && employeeId) {
            history.goBack();
          }
        })
        .catch(({ response }) => {
          switch (response.data.error) {
            case "wrong":
              setLoggingError("Invalid credentials");
              break;
            case "blocked":
              setLoggingError("Your account is blocked, please contact us");
              break;
            case "inactive":
              setLoggingError(
                "Please, check your email address to activate your account"
              );
              break;
            default:
              break;
          }
        });
    }
  };

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
            <div className=" login-form col-lg-6 col-md-8">
              <div className="login-form-title">
                <span className="login-form-title-1">login</span>
              </div>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <div className="input-group-prepend">
                    <span
                      className={`input-group ${
                        errors.email !== "" && errors.email !== "valid"
                          ? "border-danger"
                          : ""
                      }`}
                    ></span>
                  </div>
                  <input
                    type="email"
                    className={`form-control  ${
                      errors.email !== "" && errors.email !== "valid"
                        ? "is-invalid"
                        : ""
                    }`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    value={user.email}
                    placeholder="Enter your email"
                  />
                  {errors.email !== "" && errors.email !== "valid" ? (
                    <h6 className="invalid-feedback">{errors.email}</h6>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <div className="input-group-prepend">
                    <span
                      className={`input-group${
                        errors.password !== "" && errors.password !== "valid"
                          ? "border-danger"
                          : ""
                      }`}
                    ></span>
                  </div>
                  <input
                    type="password"
                    className={`form-control  ${
                      errors.password !== "" && errors.password !== "valid"
                        ? "is-invalid"
                        : ""
                    }`}
                    id="exampleInputPassword1"
                    name="password"
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                    value={user.password}
                    placeholder="Enter your password"
                  />
                  {errors.password !== "" && errors.password !== "valid" ? (
                    <h6 className="invalid-feedback">{errors.password}</h6>
                  ) : null}
                </div>
                {loggingError ? (
                  <p className="text-danger pb-3">{loggingError}</p>
                ) : (
                  ""
                )}

                <button type="submit" className="btn btn-primary mb-3 site-btn">
                  Submit
                </button>
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Not a member?
                    <Link to="/register" className=" ml-2 text-warning">
                      Register
                    </Link>
                  </p>
                  <p className="text-muted font-weight-bold">
                    Forgot password?
                    <Link to="/forgot-password" className=" ml-2 text-warning">
                      Reset
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Login;
