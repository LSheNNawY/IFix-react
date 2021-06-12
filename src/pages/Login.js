import React, {useState} from "react";
import NavbarComponent from "../components/front/NavbarComponent";
import FooterComponent from "../components/front/FooterComponent";
import {Link, useHistory} from "react-router-dom";

const ajaxLogin = async (email, password) => {
    const data = await (
        await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({email, password}),
        })
    ).json();
    return data;
};

const Login = () => {
    const [user, setUser] = useState({email: "", password: ""});

    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();

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
                history.push("/");
            } else {
                console.log("error login");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <NavbarComponent/>
            <div className="container mt-5">
                <div className="row">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                name="email"
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                value={user.email}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                value={user.password}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <div className="text-center w-100">
                            <p className="text-muted font-weight-bold">
                                Not a member?
                                <Link to="/register" className="text-primary ml-2">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <FooterComponent/>
        </>
    );
};

export default Login;
