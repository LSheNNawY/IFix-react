import React, { useState, useContext } from "react";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import { Link, useHistory } from "react-router-dom";
import { authFormValidation } from "../helpers/loginValidation";
import UserContext from "../context/UserContext";

import "../assets/front/css/login.css";
import { date } from "yup/lib/locale";
const ajaxLogin = async (email, password) => {
  const data = await (
    await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    })
  ).json();
  console.log(data)
  return data;
};

const Login = (props) => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const [loggingError, setLoggingError] = useState("");
    const { getUser } = useContext(UserContext);
    console.log(setUser);
  //console.log(user);

  const history = useHistory();
  const { id } = props
  console.log("id= ",id)
  

   
  const submitHandler = async (e) => {
    e.preventDefault();
    if (authFormValidation(user.email, user.password, setErrors)) {
      try {
        const userData = await ajaxLogin(user.email, user.password);
        console.log("user data = ", userData);
        if (userData.userId) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              userId: userData.userId,
              email: userData.email,
            })
          );
          await getUser();

          history.push("/");
        } else {
          setLoggingError("Please Register First");
        }
      } catch (err) {
        console.log(err);
      }
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
                  <h6 className="text-danger pb-3">{loggingError}</h6>
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
