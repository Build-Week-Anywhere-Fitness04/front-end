import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Anywhere Fitness
          <div>
            <Link to="/login">Login</Link>
          </div>
        </header>

        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
