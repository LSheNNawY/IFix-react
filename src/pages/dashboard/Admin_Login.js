import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { authFormValidation } from "../../helpers/adminValidation";
import UserContext from "../../context/UserContext";

// react-bootstrap components
import "../../assets/dashboard/css/style.css";

import axios from "axios";

function Admin_Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", role: "" });
  const [loggingError, setLoggingError] = useState("");
  const { getUser } = useContext(UserContext);

  const history = useHistory();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (authFormValidation(user.email, user.password, errors.role, setErrors)) {
      
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/login`, {
          email: user.email,
          password: user.password,
        })
        .then(({ data }) => {
          getUser();
          console.log("data = ", data);

          /* if (data.role === "admin" || data.role === "super admin") {
            history.push("/admin");
          } else {
            errors.role = "only admin allowed";
            console.log("role after = " ,errors.role);
            history.push("/adminlogin");
          } */
          

          if (data.role === "user") 
          {
            document.querySelector("#role_id").innerText =
              "Only admins allowed";
            history.push("/adminlogin");
          } 
          else 
          {
            history.push("/admin");
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
    <div className="body">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={submitHandler} className="form">
          <div className="user-box">
            <input
              className={`input  ${
                errors.email !== "" && errors.email !== "valid"
                  ? "is-invalid"
                  : ""
              }`}
              /*  style= {{backgroundColor: "rgba(0, 0, 0, 0.5);"}} */
              name="email"
              placeholder="Email"
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
            {/*  <label class="label" for="">
              Username
            </label> */}
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
              placeholder="password"
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

            {/* <label class="label" for="">
              Password
            </label> */}
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

          {errors.role !== "" && errors.role !== "valid" ? (
            <h6 className="invalid-feedback" style={{ backgroundColor: "red" }}>
              {errors.role}
            </h6>
          ) : null}

          {loggingError ? (
            <p className="text-danger pb-3">{loggingError}</p>
          ) : (
            ""
          )}
          <div>
            <p className="text-danger pb-3" id="role_id"></p>
          </div>
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
