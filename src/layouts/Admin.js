import React, { useState, useContext, useEffect } from "react";
import { useLocation, Route, Switch, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

import routes from "../routes/dashboard/routes.js";

import AdminNavbar from "../components/dashboard/Navbars/AdminNavbar";
import Footer from "../components/dashboard/Footer/Footer";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import FixedPlugin from "../components/dashboard/FixedPlugin/FixedPlugin";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/dashboard/css/animate.min.css";
import "../assets/dashboard/css/light-bootstrap-dashboard-react.css";
import "../assets/dashboard/css/demo.css";

import sidebarImage from "../assets/dashboard/img/sidebar-3.jpg";
import axios from "axios";

function Admin() {
  const history = useHistory();
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const [finalRoutes, setFinalRoutes] = useState(routes);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const { user } = useContext(UserContext);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    if (!user || user === undefined || JSON.stringify(user) === "{}") {
      async function getUser() {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/current-user`
        );
        if (!response.data || response.data === undefined) {
          history.push("/adminlogin");
        } else if (
          response.data?.role !== "super admin" &&
          response.data?.role !== "admin"
        ) {
          history.push("/notfound");
        }
        response.data?.role === "admin"
          ? setFinalRoutes(
              finalRoutes.filter((route) => route.path !== "/admins")
            )
          : setFinalRoutes(finalRoutes);
      }
      getUser();
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  return (
    <>
      <div className="wrapper">
        <Sidebar
          color={color}
          image={hasImage ? image : ""}
          routes={finalRoutes}
        />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(finalRoutes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
      <FixedPlugin
        hasImage={hasImage}
        setHasImage={() => setHasImage(!hasImage)}
        color={color}
        setColor={(color) => setColor(color)}
        image={image}
        setImage={(image) => setImage(image)}
      />
    </>
  );
}

export default Admin;
