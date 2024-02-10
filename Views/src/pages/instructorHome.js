import React from 'react';
import './css/insHome.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import homeImage from './img/home.jpg';

const InstructorHome = () => {
  return (
    <>
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
      <header>
        <img className="home-logo-img" src={logo} alt="HomePageLogo" />
        <div className="homeLogo">TutorMeister</div>
        <nav className="navigationBar">
          <ul>
            <li><a href="instructorHome.html">Home</a></li>
            <li><a href="instructorMyCourses.html">My Courses</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">Notifications</a></li>
          </ul>
        </nav>
      </header>

      <center><input type="text" className="search" placeholder="Search" /></center>
      <div className="home-body">
        <center><h3 className="heading">Welcome to TutorMeister!</h3></center>
        <center><input type="button" value="Create a course" className="btn create-btn" onClick={() => window.location.href='createACourse.html'} /></center>
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

export default InstructorHome;
