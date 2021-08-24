import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";

function App() {
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
        </header>

        <Switch>
          <PrivateRoute exact path="/classes" />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
