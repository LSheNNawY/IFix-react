import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { authFormValidation } from "../../helpers/adminValidation";

// react-bootstrap components
import "../../assets/dashboard/css/style.css";

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
        .post(`${process.env.REACT_APP_API_URL}/admin/login`, {
          email: user.email,
          password: user.password,
        })
        .then(({ data }) => {
          getUser();
          history.push("/adminlogin");

          if (data.role === "user") {
            history.push("/adminlogin");
          } else {
            history.push("/admin/dashboard");
          }
        })
        .catch(({ response }) => {
          switch (response.data.error) {
            case "invalid credentials":
            case "wrong":
              setLoggingError("Invalid credentials");
              break;

            case "blocked":
              setLoggingError("This account is blocked, please contact us");
              break;

            default:
              break;
          }
        });
    }
  };
  return (
    <div className="adminLogin">

{/* 
    <div className="container ">
      <div className="row"> */}

     {/* <div className ="col-lg-6 "> */}
      <div className="login-box m-auto">
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
          <div className="user-box">
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
    //   </div>
    // </div>
    // </div>
  );
}

export default Admin_Login;
