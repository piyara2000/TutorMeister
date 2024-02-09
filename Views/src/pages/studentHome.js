import React from 'react';
import './css/stdHome.css'; // Import CSS file
import logo from './img/logo.jpg'; // Import logo image
import homeImage from './img/home.jpg'; // Import home background image
import courseImage from './img/maths.png';

const StudentHome = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
      <link rel="stylesheet" href="./css/stdHome.css" />

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
            <li><a href="studentHome.js">Home</a></li>
            <li><a href="studentMyCourse.html">My Courses</a></li>
            <li><a href="">Account</a></li>
            <li><a href="">Notifications</a></li>
            <li><a href="">Cart</a></li>
          </ul>
        </nav>
      </header>

      <center><input type="text" className="search" placeholder="Search" /></center>

      <section className="container content-section">
        <div className="items">
          <div className="item">
            <img className="item-image" src={courseImage} alt="" />
            <span className="item-title">Mathematics</span>
            <div className="item-details">
              <p>Grade: 9 <br /> Instructor: James Wicked </p>
              <p className="item-price">$10</p>
              <button className="btn item-button" type="button">View</button>
              <button className="btn item-button" type="button">Add to Cart</button>
            </div>
          </div>
          <div className="item">
            <img className="item-image" src={courseImage} alt="" />
            <span className="item-title">Mathematics</span>
            <div className="item-details">
              <p>Grade: 9 <br /> Instructor: James Wicked </p>
              <p className="item-price">$10</p>
              <button className="btn item-button" type="button">View</button>
              <button className="btn item-button" type="button">Add to Cart</button>
            </div>
          </div>
          <div className="item">
            <img className="item-image" src={courseImage} alt="" />
            <span className="item-title">Mathematics</span>
            <div className="item-details">
              <p>Grade: 9 <br /> Instructor: James Wicked </p>
              <p className="item-price">$10</p>
              <button className="btn item-button" type="button">View</button>
              <button className="btn item-button" type="button">Add to Cart</button>
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
        <p><center> © 2024, TutorMeister, Inc.</center></p>
      </div>
    </>
  );
};

export default StudentHome;
