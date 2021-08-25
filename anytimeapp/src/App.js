import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from "yup";
import schema from "./validation/schema";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import ClassList from "./components/ClientPage/ClassList";

function App() {
  // const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  const [loginErrors, setLoginErrors] = useState();

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setLoginErrors({ ...loginErrors, [name]: "" }))
      .catch((err) =>
        setLoginErrors({ ...loginErrors, [name]: err.errors[0] })
      );
  };

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
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/home">home</Link>
          </div>
        </header>

        <Switch>
          <PrivateRoute exact path="/classes" component={ClassList} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
