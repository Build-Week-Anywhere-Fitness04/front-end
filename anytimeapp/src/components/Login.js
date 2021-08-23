import axios from "axios";
import React from "react";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: false,
    isTeacher: false,
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    if (this.state.credentials === "") {
      this.setState({
        error: "Username or Password are not valid. Please try again",
      });
    } else if (this.state.isTeacher === true) {
      axios
        .post("http://localhost:3000/api/login", this.state.credentials)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/teacher");
        });
    } else {
      axios
        .post("http://localhost:3000/api/login", this.state.credentials)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/client");
        });
    }
  };
}

export default Login;
