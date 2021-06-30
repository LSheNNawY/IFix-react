import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import UserContext from "../context/UserContext";

const Logout = () => {
  const { getUser } = useContext(UserContext);

  const history = useHistory();

  const Logout = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/users/logout`);
    await getUser();
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
