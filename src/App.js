import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
// import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

import AdminLayout from "./layouts/Admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/dashboard/css/animate.min.css";
import "./assets/dashboard/css/light-bootstrap-dashboard-react.css";
import "./assets/dashboard/css/demo.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthContextProvider from "./context/AuthContext";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/aboutUs" component={AboutUs} />
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
