import React from 'react';
import './css/stdHome.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import coursesImage from './img/myCourses.jpg'; // Update the path as needed
import maths from './img/maths.png';

const InstructorCourseHome = () => {
  return (
    <>
      <style>
        {`
          body {
            background-image: url(${coursesImage});
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

      <section className="container content-section">
        <div className="items">
          <div className="item">
            <img className="item-image" src={maths} alt="" />
            <span className="item-title">Mathematics</span>
            <div className="item-details">
              <p>Grade: 9 <br /> Instructor: James Wicked </p>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>
          {/* Repeat similar structure for other courses */}
        </div>
      </section>

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

export default InstructorCourseHome;
