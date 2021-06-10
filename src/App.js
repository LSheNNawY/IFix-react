import {Switch, Route, Redirect} from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login}/>
                <Redirect from='/login/' to="/" />
                <Route path='/register' component={Register}/>
            </Switch>
        </div>
    );
}

export default App;
