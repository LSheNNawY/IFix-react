import { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Employee_Jobs from "./pages/Employee_Jobs";
import AllProfessions from "./pages/AllProfessions";
import Services from "./pages/Services";

import AdminLayout from "./layouts/Admin";
import Review from "./pages/Review";

import UserContext from "./context/UserContext";
import axios from "axios";

import "@fortawesome/fontawesome-free/css/all.min.css";

axios.defaults.withCredentials = true;

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/order" component={Order} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/employeejobs" component={Employee_Jobs} />
        <Route path="/professions" component={AllProfessions} />
        <Route path="/profile/:id" render={(props) => <Profile {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route
          path="/services/:id"
          render={(props) => <Services {...props} />}
        />
      </Switch>
    </div>
  );
}
export default App;
