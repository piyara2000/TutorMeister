import React from "react";
import './css/stdSignUp.css';
import logo from './img/logo.jpg';
import logonew from './img/Rectangle 12.png'
import loginImage from './img/login.jpg';

const StudentSignUpPage02 = () => {
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
        <form action="" className="form2">
          <div className="row">
            <div className="flexPage2">
              <div className="flexLabel">
                <label className="label-eduQual">Educational Qualification:</label>
              </div>
              <div className="flexLabel2">
                <select id="eduQual" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="school">School</option>
                  <option value="higherEducation">Higher Education</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="graduated">Graduated</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel">
                <label className="label-eduQual">Preferred Learning Style:</label>
              </div>
              <div className="flexLabel2">
                <select id="eduQual" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="visual">Visual</option>
                  <option value="auditory">Auditory</option>
                  <option value="kinesthetic">Kinesthetic</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel">
                <label className="label-eduQual">Learning Pace:</label>
              </div>
              <div className="flexLabel2">
                <select id="eduQual" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="slow">Slow</option>
                  <option value="average">Average</option>
                  <option value="fast">Fast</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel">
                <label className="label-eduQual">Learning Style:</label>
              </div>
              <div className="flexLabel2">
                <select id="eduQual" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="oneOnOne">One-on-one</option>
                  <option value="group">Group</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel">
                <label className="label-eduQual">Learning Mode:</label>
              </div>
              <div className="flexLabelRadio">
                <div class="optionGroup">
                  <input type="radio" id="inPerson" name="learningMode" value="inPerson" className="radioButton" />
                  <label for="inPerson">In person</label>
                </div>
                {/* <input type="radio" id="inPerson" name="learningMode" value="inPerson" className="radioButton" />
                <label for="inPerson">In person</label> */}
                <div class="optionGroup">
                  <input type="radio" id="online" name="learningMode" value="online" className="radioButton" />
                  <label for="online">Online</label>
                </div>
                {/* <input type="radio" id="online" name="learningMode" value="online" className="radioButton" />
                <label for="online">Online</label> */}
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel">
                <label className="label-eduQual">Learning Preferences:</label>
              </div>
              <div className="flexLabel2">
                <input type="text" className="richText" placeholder="" />
              </div>
            </div>
            <div className="flex3Page2">
              <div className="flexBox">
                <input
                  type="button"
                  value="Back"
                  className="button signInstructor-btn"
                  onClick={() => window.location.href = '/student-register'}
                />
              </div>
              <div className="flexBox">
                <input
                  type="button"
                  value="Register"
                  className="button register-btn"
                  onClick={() => window.location.href = '/student-home'}
                />
              </div>
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
        <p><center>© 2024, TutorMeister, Inc.</center></p>
      </div>
    </>
  );
};

export default StudentSignUpPage02;
