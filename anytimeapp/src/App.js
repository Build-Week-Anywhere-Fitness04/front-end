import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from "yup";
import schema from "./validation/schema";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import ClassList from "./components/ClientPage/ClassList";
import Settings from "./components/Settings";

import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import InstructorPage from './components/InstructorPage/InstructorPage';
import { AuthProvider } from "./components/AuthContexts";


// initialLoginErrors = {
//   email: '',
//   password: ''
// }

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
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path ="/instructor" component={InstructorPage} />
          <PrivateRoute exact path="/classes" />
          <Route path="/Registration" component={Registration} />
          <Route path="/Home" component={Home} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Class" component={ClassList} />
          <Route path="/" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
