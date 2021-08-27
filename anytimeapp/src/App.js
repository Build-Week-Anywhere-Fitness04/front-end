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
import { AuthProvider } from "./components/AuthContexts";
import InstructorPage from "./components/InstructorPage/InstructorPage";
import AddClass from "./components/InstructorPage/AddClass";



function App() {
  


  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/classes" component={AddClass} />
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
