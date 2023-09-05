import React, { Component } from "react";
import "./signup.css";
import placement_portal_1 from "./placement_portal_1.png";
import ErrorMessage from "./ErrorMessage";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      skillMatrix: "",
      skillList: [],
      resume: null,
      isRegistered: false,
      showError: false,
      showPassword: false,
      showConfirmPassword: false,
      showFullFileName: false,
    };
  }

  removeSkill = (index) => {
    const updatedSkills = [...this.state.skillList];
    updatedSkills.splice(index, 1);
    this.setState({ skillList: updatedSkills });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFileChange = (event) => {
    this.setState({
      resume: event.target.files[0],
    });
  };

  handlePasswordToggle = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleConfirmPasswordToggle = () => {
    this.setState((prevState) => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  handleToggleFileName = () => {
    this.setState((prevState) => ({
      showFullFileName: !prevState.showFullFileName,
    }));
  };

  handleSkillKeyPress = (event) => {
    if (event.key === "Enter" && this.state.skillMatrix.trim() !== "") {
      this.setState((prevState) => ({
        skillList: [...prevState.skillList, prevState.skillMatrix.trim()],
        skillMatrix: "",
      }));
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, username, password, confirmPassword, skillMatrix, resume } = this.state;

    if (!email || !username || !password || !confirmPassword || !skillMatrix || !resume) {
      this.setState({ showError: true });
      return;
    }

    this.setState({
      isRegistered: true,
    });
  };

  handleCloseError = () => {
    this.setState({ showError: false });
  };

  render() {
    const {
      email,
      username,
      password,
      confirmPassword,
      isRegistered,
      showError,
      showPassword,
      showConfirmPassword,
      showFullFileName,
    } = this.state;

    return (
      <div className="page-container">
        <div className="signup-container">
          <h1 className="portal-text">Placement Portal</h1>
          <div className="signup-image-container">
            <img src={placement_portal_1} alt="Placement Portal" className="signup-image" />
          </div>
          <div className="form-container">

          <div className="welcome-container">
              <p className="welcome-text">Create an Account</p>
            </div>
          <div className="signup-content">
            
            <div className="input-container">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={this.handleChange}
                className="signup-input"
              />
            </div>
            <div className="input-container">
              <label>Email ID:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={this.handleChange}
                className="signup-input"
              />
            </div>
            <div className="input-container">
              <label>Create Password:</label>
              <div className={"password-input"}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create your password"
                  value={password}
                  onChange={this.handleChange}
                  style={{ width: "100%" }}
                  className="signup-input"
                />
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                  onClick={this.handlePasswordToggle}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="input-container">
              <label>Confirm Password:</label>
              <div className={"password-input"}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={this.handleChange}
                  style={{ width: "100%" }}
                  className="signup-input"
                />
                <i
                  className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} password-icon`}
                  onClick={this.handleConfirmPasswordToggle}
                  autoComplete="off"
                />
              </div>
            </div>
 {/* Add a scrollbar to the skill matrix */}
 <div className="input-container password-style">
              <label>Skill Matrix:</label>
              <div className="skill-matrix-container">
                <input
                  type="text"
                  name="skillMatrix"
                  placeholder="Add skills (e.g., HTML, CSS)"
                  onChange={this.handleChange}
                  onKeyPress={this.handleSkillKeyPress}
                  autoComplete="off"
                  className="signup-input"
                />
                <div className="skill-list">
                  {this.state.skillList.map((skill, index) => (
                    <div key={index} className="skill">
                      {skill}
                      <span
                        className="remove-skill"
                        onClick={() => this.removeSkill(index)}
                      >
                        &#x2715;
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            

               {/* Resume Upload */}
               <div className={`input-container password-style`}>
              <label>Upload Resume:</label>
              <div className="file-input-container">
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={this.handleFileChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <div className={`file-input ${this.state.resume ? "file-selected" : ""}`}>
                  {!this.state.resume && <span className="placeholder-text">Choose File</span>}
                  {this.state.resume && (
                    <span
                      className={`file-name ${showFullFileName ? "full-file-name" : ""}`}
                    >
                      {this.state.resume.name}
                    </span>
                  )}
                  <img
                    src={require("./file_upload.png")}
                    alt="Upload File"
                    className="file-upload-icon"
                    onClick={() => document.querySelector("#file-input").click()}
                  />
                </div>
              </div>
            </div>

            
          </div>
          <div className="create-account-container">
              <p className="create-account-text">
                Already have an account? <a href="/">Login</a>
              </p>
            </div>
            {/* Register Button */}
            <button onClick={this.handleSubmit} className="signup-button">
              Register
            </button>
          </div>

        {showError && (
          <ErrorMessage
            message="Please fill in all the fields."
            onClose={this.handleCloseError}
          />
        )}
      </div>
      </div>
    );
  }
}

export default Signup;