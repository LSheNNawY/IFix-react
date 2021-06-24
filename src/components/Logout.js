import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const Logout = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/users/logout`);
    await getLoggedIn();
    history.push("/");
  };
  return (
    <button
      onClick={Logout}
      className="btn btn-link"
      style={{ outline: "none" }}
    >
      Logout
    </button>
  );
};

export default Logout;
