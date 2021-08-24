import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from 'yup';
import schema from './validation/schema';
import Login from "./components/Login";



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
