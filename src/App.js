import { useContext } from "react";
import UserContext from "./context/UserContext";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Employee_Jobs from "./pages/Employee_Jobs";
import AllProfessions from "./pages/AllProfessions";
import Services from "./pages/Services";
import Logout from "./components/Logout";
import AdminLayout from "./layouts/Admin";
import Review from "./pages/Review";
import AccountActivation from "./pages/AccountActivation";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import AdminLogin from "./pages/dashboard/Admin_Login";

import NotFound from "./components/front/NotFound";
import axios from "axios";
// import UserContext from "./context/UserContext";

import "@fortawesome/fontawesome-free/css/all.min.css";

axios.defaults.withCredentials = true;

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />

        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>

        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

        <Route path="/logout" component={Logout} />

        <Route path="/contact" component={Contact} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/order" component={Order} />
        <Route path="/review" component={Review} />
        <Route path="/professions" component={AllProfessions} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/jobs" component={Employee_Jobs} />
        <Route path="/profile/:id" render={(props) => <Profile {...props} />} />

        <Route exact path="/adminlogin">
          {user && (user.role === "admin" || user.role === "super admin") ? (
            <Redirect to="/admin/dashboard" />
          ) : (
            <AdminLogin />
          )}
        </Route>

        {user && (user.role === "super admin" || user.role === "admin") ? (
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        ) : null}

        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

        <Route path="/review" component={Review} />
        <Route path="/account-activation" component={AccountActivation} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/password-reset" component={PasswordReset} />

        <Route
          path="/services/:id"
          render={(props) => <Services {...props} />}
        />
        <Route path="/notfound" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
export default App;
