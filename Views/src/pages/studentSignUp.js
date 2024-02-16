import React from "react";
import './css/stdSignUp.css'; 
import logo from './img/logo.jpg';
import logonew from './img/Rectangle 12.png'
import loginImage from './img/login.jpg';

const StudentSignUp = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sign-Up</title>
      <link rel="stylesheet" href="css/stdSignUp.css" />
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
      <div className="containerStd">
        <form action="" className="form">
          <div className="row">
            <div className="flex">
            <img className="home-logo-img-stSignup" src={logonew} alt="HomePageLogo" />
              {/* <div>
                <img className="home-logo-img" src={logo} alt="HomePageLogo" />
              </div>
              <div>
                <h3 className="homeLogoSignUp">TutorMeister</h3>
              </div> */}
            </div>
            <h3 className="heading-stSignup">Sign-Up As a Student</h3>
            <div className="flex">
              <div>
                <input type="text" className="inputbox name" placeholder="First name" />
              </div>
              <div>
                <input type="text" className="inputbox name" placeholder="Last name" />
              </div>
            </div>
            <div className="flex1">
              <div>
                <input type="text" className="inputbox name" placeholder="User name" />
              </div>
              <div>
                <input type="text" className="inputbox name" placeholder="Age" />
              </div>
            </div>
            <br />
            <center>
              <input type="text" className="inputbox details" placeholder="Country" />
            </center>
            <br />
            <center>
              <input type="email" className="inputbox details" placeholder="Email" />
            </center>
            <br />
            <center>
              <input type="password" className="inputbox details" placeholder="Create password" />
            </center>
            <br />
            <div className="flex3">
              <div className="flexBox">
                <input
                  type="button"
                  value="Sign-Up as an instructor"
                  className="button signInstructor-btn"
                  onClick={() => window.location.href = 'instructorSignUp.html'}
                />
              </div>
              <div className="flexBox">
                <input
                  type="button"
                  value="Register"
                  className="button register-btn"
                  onClick={() => window.location.href = 'studentHome.html'}
                />
              </div>
            </div>
            <div className="flex4">
              <div>
                <input
                  type="button"
                  value="Already have an account? Log-In"
                  className="button login-btn"
                  onClick={() => window.location.href = 'studentLogIn.html'}
                />
              </div>
            </div>
            <br />
            {/* <div className="padding">
              <input
                type="button"
                value="Sign-Up as an instructor"
                className="button instructor-signup-btn"
                onClick={() => window.location.href = 'instructorSignUp.html'}
              />
            </div> */}
          </div>
        </form>
      </div>
      <div className="home-footer">
        <ul>
          <li><a href="">Help desk</a></li>
          <li><a href="">Contact us</a></li>
          <li><a href="">About us</a></li>
        </ul>
        <hr />
        <p><center>© 2024, TutorMeister, Inc.</center></p>
      </div>
    </>
  );
};

export default StudentSignUp;
