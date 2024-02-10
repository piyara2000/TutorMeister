import React from 'react';
import './css/stdSignUp.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import signupImage from './img/login.jpg'; // Update the path as needed

const InstructorSignUp = () => {
  return (
    <>
      <style>
        {`
          body {
            background-image: url(${signupImage});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
        `}
      </style>
      <div className="container">
        <form action="" className="form">
          <div className="row">
            <div className="flex">
              <div>
                <img className="home-logo-img" src={logo} alt="HomePageLogo" />
              </div>
              <div>
                <h3 className="homeLogoSignUp">TutorMeister</h3>
              </div>
            </div>
            <h3 className="heading">Sign-Up As an Instructor</h3>
            <div className="flex">
              <div>
                <input type="text" className="inputbox name" placeholder="First name" />
              </div>
              <div>
                <input type="text" className="inputbox name" placeholder="Last name" />
              </div>
            </div><br />
            <center>
              <input type="email" className="inputbox details" placeholder="Email" />
            </center><br />
            <center>
              <input type="password" className="inputbox details" placeholder="Create password" />
            </center><br />
            <center>
              <input type="contact" className="inputbox details" placeholder="Contact Number" />
            </center><br />
            <div className="flex buttons">
              <div>
                <input
                  type="button"
                  value="Register"
                  className="button register-btn"
                  onClick={() => window.location.href = 'instructorHome.html'}
                />
              </div>
              <div>
                <input
                  type="button"
                  value="Already have an account? Log-In"
                  className="button login-btn"
                  onClick={() => window.location.href = 'instructorLogIn.html'}
                />
              </div>
            </div><br />
            <div className="padding">
              <input
                type="button"
                value="Sign-Up as an Student"
                className="button instructor-signup-btn"
                onClick={() => window.location.href = 'studentSignUp.html'}
              />
            </div>
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
        <p><center>© 2023, TutorMeister, Inc.</center></p>
      </div>
    </>
  );
};

export default InstructorSignUp;
