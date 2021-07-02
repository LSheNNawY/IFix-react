import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(undefined);

  async function getUser() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/current-user`
    );
    setUser(response.data);
    sessionStorage.setItem("user", JSON.stringify(response.data));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
export { UserContextProvider };
