import React from 'react';
import './css/stdSignUp.css'; 
import './css/stdHome.css';
import './css/createCourse.css';
import logo from './img/logo.jpg'; // Update the path as needed
import homeImage from './img/home.jpg';

const CreateCourse = () => {
  return (
    <>
      <header>
      <style>
        {`
          body {
            background-image: url(${homeImage});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
        `}
      </style>
      <img className="home-logo-img" src={logo} alt="HomePageLogo" />
        <div className="homeLogo">TutorMeister</div>
        <nav className="navigationBar">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">My Courses</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">Notifications</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <form action="" className="form create-form">
          <div className="row">
            <h3 className="heading">Create A Course</h3>
            <center><input type="text" className="inputbox details login-details" placeholder="Subject" /></center><br /><br />
            <center><input type="text" className="inputbox details login-details" placeholder="Grade" /></center><br /><br />
            <center><input type="email" className="inputbox details login-details" placeholder="Email" /></center><br /><br />
            <center><input type="number" className="inputbox details login-details" placeholder="Phone Number" /></center><br /><br />
            <center><textarea className="inputbox details login-details textArea" placeholder="Description" rows="4" cols="50"></textarea></center><br /><br />
            <div className="flex buttons signup-btns">
              <div>
                <input type="button" value="Cancel" className="button signup-btn" onClick={() => window.location.href='instructorHome.html'} />
              </div>
              <div>
                <input type="button" value="Continue to payment" className="button signup-btn" onClick={() => window.location.href=''} />
              </div>
            </div><br />
          </div>
        </form>
      </div>

      <div className="create-footer">
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

export default CreateCourse;
