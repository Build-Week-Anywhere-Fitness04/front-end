import axios from "axios";
import React from "react";

class Registration extends React.Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.credentials === "") {
      this.setState({
        error: "Username or Password are not valid. Please try again",
      });
    } else if (this.state.isTeacher === true) {
      axios
        .post("http://localhost:3001/api/user", this.state.credentials)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/login");
        });
    } else {
      axios
        .post("http://localhost:3001/api/user", this.state.credentials)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/login");
        });
    }
  };

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Registration;
