 import { useContext } from "react";
 import UserContext from "./context/UserContext";
import { Route, Switch } from "react-router-dom";
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
import Admin_Login from "./pages/dashboard/login" 


// import UserContext from "./context/UserContext";
import axios from "axios";

import "@fortawesome/fontawesome-free/css/all.min.css";

axios.defaults.withCredentials = true;

function App() {
   const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          exact
          path="/login"
          render={() => {
            if (user) {
              //alert("You can't login if you are logged in!")
              return <Home />;
            } else return <Login />;
          }}
        />
        <Route path="/logout" component={Logout} />
        <Route
          exact
          path="/register"
          render={() => {
            if (user) {
              alert("You are already registered!");
              return <Home />;
            } else return <Register />;
          }}
        />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/order" component={Order} />
        <Route path="/review" component={Review} />
        <Route path="/professions" component={AllProfessions} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/jobs" component={Employee_Jobs} />
        <Route path="/profile/:id" render={(props) => <Profile {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/admin/login" component={Admin_Login} />
        <Route path="/review" component={Review} />
        <Route path="/account-activation" component={AccountActivation} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/password-reset" component={PasswordReset} />

        <Route
          path="/services/:id"
          render={(props) => <Services {...props} />}
        />
      </Switch>
    </div>
  );
}
export default App;
