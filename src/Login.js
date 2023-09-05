import React, { Component } from "react";
import "./login.css";
import placement_portal from "./placement_portal.png";
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage'; // Import the ErrorMessage component

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameOrEmail: "",
      password: "",
      isLoggedIn: false,
      showError: false,
      showPassword: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePasswordToggle = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { usernameOrEmail, password } = this.state;

    // Check if usernameOrEmail and password are empty
    if (!usernameOrEmail || !password) {
      this.setState({ showError: true }); // Show the error message
      return; // Don't proceed with login
    }

    // TODO: Validate the usernameOrEmail and password
    // TODO: Authenticate the user

    this.setState({
      isLoggedIn: true,
    });
  };

  handleCloseError = () => {
    this.setState({ showError: false }); // Close the error message
  };

  render() {
    const { usernameOrEmail, password, isLoggedIn, showError, showPassword } = this.state;
    return (
      <div className="login-container">
        <h1 className="portal-text">Placement Portal</h1>
        <div className="login-image-container">
          <img src={placement_portal} alt="Placement Portal" className="login-image" />
        </div>
        <div className="login-content">
          <div className="welcome-container">
            <p className="welcome-text">Welcome</p>
          </div>
          <div className="input-container">
            <label>Username or Email:</label>
            <div className="password-input">
              <input
                type="text"
                name="usernameOrEmail"
                placeholder="Enter your username or email"
                value={usernameOrEmail}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="input-container"> {/* This div is for the Password */}
            <label>Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={this.handleChange}
              />
              <i
                className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                onClick={this.handlePasswordToggle}
              />
            </div>
          </div>
          <button onClick={this.handleSubmit} className="button">Login</button>
          <p className="new-user-text">
            New User? <Link to="/signup">Click here</Link>
          </p>
        </div>
        {/* Conditionally render the error message */}
        {showError && (
          <ErrorMessage
            message="Please fill in all the fields."
            onClose={this.handleCloseError}
          />
        )}
      </div>
    );
  }
}

export default Login;