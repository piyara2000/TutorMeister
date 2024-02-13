import React from 'react';
import './css/insHome.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import homeImage from './img/home.jpg';
import courseImage from './img/maths.png';

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

      <div className='search-margin'>
        <input type="text" className="instructor-search" id = "search" placeholder="Search" />
      </div>
      
      <div className='content-margin' id='content-margin'>
        <div className="home-body" id='home-body'>
          <center><h3 className="heading" id='heading'>Welcome to TutorMeister!</h3></center>
          <center><input type="button" value="Create a course" className="btn create-btn" id = 'btn create-btn' onClick={() => window.location.href='/create-course'} /></center>
        </div>
      </div>

      <section className="container content-section" id='content-section'>
        <div className="items" id='items'>
          <div className="item" id='item'>
            <img className="item-image" src={courseImage} alt="" id='item-image'/>
            <span className="item-title" id='item-title'>Mathematics</span>
            <div className="item-details" id='item-details'>
              <p id='grade'>Grade: 9 <br /> Instructor: James Wicked </p>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>
          <div className="item" id='item'>
            <img className="item-image" src={courseImage} alt="" id='item-image'/>
            <span className="item-title" id='item-title'>Mathematics</span>
            <div className="item-details" id='item-details'>
              <p id='grade'>Grade: 9 <br /> Instructor: James Wicked </p>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>
          <div className="item" id='item'>
            <img className="item-image" src={courseImage} alt="" id='item-image'/>
            <span className="item-title" id='item-title'>Mathematics</span>
            <div className="item-details" id='item-details'>
              <p id='grade'>Grade: 9 <br /> Instructor: James Wicked </p>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>
        </div>
      </section>

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
