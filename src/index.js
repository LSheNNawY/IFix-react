import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";
import reportWebVitals from "./reportWebVitals";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
