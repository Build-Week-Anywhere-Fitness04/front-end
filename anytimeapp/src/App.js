import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from 'yup';
import schema from './validation/schema';
import Login from "./components/Login";
import Registration from "./components/Registration";
import ClassList from "./components/ClientPage/ClassList";
import Settings from "./components/Settings";

import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import { AuthProvider } from "./components/AuthContexts";

function App() {
  // const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  // const validate = (name, value) => {
  //   yup.reach(schema, name)
  //   .validate(value)
  //   .then(() => setLoginErrors({ ...loginErrors, [name]: '' }))
  //   .catch(err => setLoginErrors({ ...loginErrors, [name]: err.errors[0] }))
  // }

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/classes" />
          <Route path="/Registration" component={Registration} />
          <Route path="/Home" component={Home} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Class" component={ClassList} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
