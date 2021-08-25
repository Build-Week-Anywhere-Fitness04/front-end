import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from 'yup';
import schema from './validation/schema';
import Login from "./components/Login";
<<<<<<< HEAD
import Home from "./components/Home";

// initialLoginErrors = {
//   email: '',
//   password: ''
// }
=======
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
>>>>>>> e9eadfa7018def97276569cea476540e44da1034

function App() {
  // const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //   .validate(value)
  //   .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
  //   .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  // }

  return (
    <Router>
      <div className="App">
        <header>
          Anywhere Fitness
          <div>
            <ul>
              <li>
                <Link to="/registration">New User? Register Here!</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                {localStorage.getItem("token") && (
                  <div>
                    <Link to="/classes">Link to classes</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div>
            <Link to="/home">home</Link>
          </div>
        </header>

        <Switch>
          <PrivateRoute exact path="/classes" />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
<<<<<<< HEAD
          <Route path="/home" component={Home} />
=======
          <Route path="/" component={Login} />
>>>>>>> e9eadfa7018def97276569cea476540e44da1034
        </Switch>
      </div>
    </Router>
  );
}

export default App;
