import React from 'react';
import './css/stdCourse.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import coursesImage from './img/myCourses.jpg'; // Update the path as needed
import student1 from './img/student1.jpg';
import student2 from './img/student2.jpg';
import student3 from './img/student3.jpg';

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
        <div className="itemsIns">
          <div className="itemIns">
            <img className="itemIns-image" src={student1} alt="" />
            <span className="itemIns-title">Amelia Charlotte</span>
            <div className="itemIns-details">
              <p>Grade: 9 <br /> <b>Mathematics</b> </p>
              <button className="btn item-button" type="button">View</button>
            </div> 
          </div>
          <div className="itemIns">
            <img className="itemIns-image" src={student2} alt="" />
            <span className="itemIns-title">Anne Shafa</span>
            <div className="itemIns-details">
              <p>Grade: 10 <br /> <b>Science</b> </p>
              <button className="btn item-button" type="button">View</button>
            </div> 
          </div>
          <div className="itemIns">
            <img className="itemIns-image" src={student3} alt="" />
            <span className="itemIns-title">Eric Williams</span>
            <div className="itemIns-details">
              <p>Grade: 8 <br /><b>English</b></p>
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
