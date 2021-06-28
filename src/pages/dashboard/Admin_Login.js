import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { authFormValidation } from "../../helpers/adminValidation";
import UserContext from "../../context/UserContext";

// react-bootstrap components
import "../../assets/dashboard/css/style.css";

import axios from "axios";

function Admin_Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loggingError, setLoggingError] = useState("");
  const { getUser } = useContext(UserContext);

  const history = useHistory();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (authFormValidation(user.email, user.password,  setErrors)) {
      console.log(errors.password);
      //console.log(errors.role);
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, {
          email: user.email,
          password: user.password,
        })
        .then(({ data }) => {
          getUser();
          console.log("data = ", data);
          //console.log("getUser = ", getUser);
          if (data.role === "admin" || data.role === "super admin") {
            history.push("/admin");
          } else {
            //errors.role = "invalid";
            //console.log(errors.role);
            console.log("not admin");
          }
          //console.log(errors.role)
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
    <div className="body">
      <div class="login-box">
        <h2>Login</h2>
        <form onSubmit={submitHandler} class="form">
          <div class="user-box">
            <input
              className={`input  ${
                errors.email !== "" && errors.email !== "valid"
                  ? "is-invalid"
                  : ""
              }`}
              name="email"
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              value={user.email}
              type="text"
              id=""
              required=""
            />
            {errors.email !== "" && errors.email !== "valid" ? (
              <h6 className="invalid-feedback">{errors.email}</h6>
            ) : null}
            <label class="label" for="">
              Username
            </label>
          </div>
          <div className="input-group-prepend">
            <span
              className={`input-group ${
                errors.email !== "" && errors.email !== "valid"
                  ? "border-danger"
                  : ""
              }`}
            ></span>
          </div>
          <div class="user-box">
            <input
              className={`input  ${
                errors.password !== "" && errors.password !== "valid"
                  ? "is-invalid"
                  : ""
              }`}
              name="password"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              value={user.password}
              type="password"
              id=""
              required=""
            />
            {errors.password !== "" && errors.password !== "valid" ? (
              <h6 className="invalid-feedback">{errors.password}</h6>
            ) : null}

            <label class="label" for="">
              Password
            </label>
              </div>
            <div className="input-group-prepend">
              <span
                className={`input-group${
                  errors.password !== "" && errors.password !== "valid"
                    ? "border-danger"
                    : ""
                }`}
              ></span>
            </div>
          {/*  {errors.role !== "" && errors.role !== "valid" ? (
            <h6 className="invalid-feedback" style={{backgroundColor:"red"}}>{errors.role}</h6>
          ) : null} */}

          {loggingError ? (
            <p className="text-danger pb-3">{loggingError}</p>
          ) : (
            ""
          )}

          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin_Login;
