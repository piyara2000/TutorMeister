import React from "react";
import "./css/stdSignUp.css";
import logo from "./img/RectangleLogo.png"; // Update the path as needed
import loginImage from "./img/login.jpg"; // Update the path as needed

const InstructorLogin = () => {
  return (
    <>
      <style>
        {`
          body {
            background-image: url(${loginImage});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
        `}
      </style>
      <div className="container-login">
        <form action="" className="form login-form">
          <div className="row">
            <div className="flex">
              <div>
                <img
                  className="rectangular-logo"
                  src={logo}
                  alt="RectangularLogo"
                />
              </div>
            </div>
            <h3 className="heading">Log-In as an Instructor</h3>
            <center>
              <input
                type="email"
                className="inputbox details login-details"
                placeholder="Email-address"
              />
            </center>
            <br />
            <br />
            <center>
              <input
                type="password"
                className="inputbox details login-details"
                placeholder="Password"
              />
            </center>
            <br />
            <br />
            <div className="flex buttons login-btn">
              <div>
                <input
                  type="button"
                  value="Log-In"
                  className="button login-btn1"
                  onClick={() => (window.location.href = "/instructor-register")}
                />
                <br />
              </div>
              <div>
                <input
                  type="button"
                  value="Forgot your password?"
                  className="button forgot-password"
                  onClick={() => (window.location.href = "")}
                />
                <br />
              </div>
            </div>
            <p>
              <center>Not a member?</center>
            </p>
            <div className="flex buttons signup-btns">
              <div>
                <input
                  type="button"
                  value="Sign-Up as a student"
                  className="button signup-btn"
                  onClick={() => (window.location.href = "/student-register")}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="Sign-Up as an instructor"
                  className="button signup-btn"
                  onClick={() =>
                    (window.location.href = "/instructor-register")
                  }
                />
              </div>
            </div>
            <br />
          </div>
        </form>
      </div>

      <div className="home-footer">
        <ul>
          <li>
            <a href="">Help desk</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
        <hr />
        <p>
          <center> © 2023, TutorMeister, Inc.</center>
        </p>
      </div>
    </>
  );
};

export default InstructorLogin;
