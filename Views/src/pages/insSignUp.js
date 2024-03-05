import React from 'react';
import './css/stdSignUp.css';
import logonew from './img/Rectangle 12.png'
import loginImage from './img/login.jpg';
import Footer from './Footer';

const InstructorSignUp = () => {
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
            </div>
            <h3 className="heading-stSignup">Sign-Up As an Instructor</h3>
            <div className="flex1">
              <div>
                <input type="text" className="inputbox name" placeholder="First Name" />
              </div>
              <div>
                <input type="text" className="inputbox name" placeholder="Last Name" />
              </div>
            </div>
            <br />
            <center>
              <input type="text" className="inputbox details" placeholder="User Name" />
            </center>
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
                  value="Sign-Up as a student"
                  className="button signInstructor-btn"
                  onClick={() => window.location.href = '/student-register'}
                />
              </div>
              <div className="flexBox">
                <input
                  type="button"
                  value="Register"
                  className="button register-btn"
                  onClick={() => window.location.href = '/instructor-home'}
                />
              </div>
            </div>
            <div className="flex4">
              <div>
                <input
                  type="button"
                  value="Already have an account? Log-In"
                  className="button login-btn"
                  onClick={() => window.location.href = '/instructor-login'}
                />
              </div>
            </div>
            <br />
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default InstructorSignUp;
