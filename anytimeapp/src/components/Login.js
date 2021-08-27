import axios from "axios";
import React from "react";
import { auth, db, googleAuthProvider } from './Firebase';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: false,
  };

  loginWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      this.props.history.push("/home");
    }
    catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };



  login = (e) => {
    // check if the account exissts
    // if it does not, then create a new user 

    e.preventDefault();
    console.log(this.state.credentials);
    auth
      .signInWithEmailAndPassword(
        this.state.credentials.username,
        this.state.credentials.password
      )
      .then((res) => {
        console.log(res.user);
        this.props.history.push("/home");
      });
  };

  render() {
    return (

      <div className="flex flex-col justify-center min-h-screen py-12 bg-cover bg-gray-50 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${'https://images.squarespace-cdn.com/content/56e487181d07c0743d227289/1580599661558-FI6JCNI15REZ265HY9R1/Canva+-+Modern+gym+interior+with+equipment.jpg?format=1500w&content-type=image%2Fjpeg'})` }}>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-center text-gray-600">
                Or{" "}
                <a
                  href="http://localhost:3000/Registration"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register Here
                </a>
              </p>
            </div>
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={this.login}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <input
                  id="instructor-box"
                  name="instructor-box"
                  type="checkbox"
                  className="text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="instructor-box"
                  className="text-sm text-gray-900"
                >
                  Check if you are an instructor
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-500 bg-white">
                    Or continue with
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={
                    this.loginWithGoogle
                  }
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Google
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
