import React from 'react';
import './css/stdHome.css'; // Import CSS file
import './css/insHome.css';
import logo from './img/logo.jpg'; // Import logo image
import homeImage from './img/home.jpg'; // Import home background image
import maths from './img/maths.png';
import science from './img/science.jpg';
import english from './img/english.jpeg';
import NavBar from './NavBarStudent';
import Footer from './Footer';

const StudentHome = () => {
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
      
      <NavBar/>
      <div className='search-margin'>
        <input type="text" className="instructor-search" id = "search" placeholder="Search" />
      </div>

      <div className='content-margin' id='content-margin'>
        <div className="home-body" id='home-body'>
          <center><h3 className="heading" id='heading'>Welcome to TutorMeister!</h3></center>
          <center><h3 className="subHeading" id='heading'>Enroll in a course from the list below that matches your preferences.</h3></center>
        </div>
      </div>

      <section className="container content-section">
        <div className="items">
          <div className="item-ins">
            <img className="item-image-ins" src={maths} alt="" />
            <span className="item-title">Mathematics</span>
            <div className="item-details">
              <p>Grade: 10 <br /> Instructor: Jane Kate </p>
              <p>BSc University of Colombo</p>
              <div className='star-rating'>
                <div class='rating'>
                  <input type="radio" name='rating1' id="rating1"></input>
                  <label for="rating1" ></label>
                  <input type="radio" name='rating1' id="rating2"></input>
                  <label for="rating2"></label>
                  <input type="radio" name='rating1' id="rating3"></input>
                  <label for="rating3"></label>
                  <input type="radio" name='rating1' id="rating4"></input>
                  <label for="rating4" ></label>
                  <input type="radio" name='rating1' id="rating5"></input>
                  <label for="rating5" ></label>
                  <br></br><br></br>
                </div>
              </div>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>

          <div className="item-ins">
            <img className="item-image-ins" src={science} alt="" />
            <span className="item-title">Science</span>
            <div className="item-details">
              <p>Grade: 10 <br /> Instructor: Doris Wilson </p>
              <p>BSc University of Moratuwa</p>
              <div className='star-rating'>
                <div class='rating'>
                  <input type="radio" name='rating6' id="rating6"></input>
                  <label for="rating6" ></label>
                  <input type="radio" name='rating6' id="rating7"></input>
                  <label for="rating7"></label>
                  <input type="radio" name='rating6' id="rating8"></input>
                  <label for="rating8"></label>
                  <input type="radio" name='rating6' id="rating9"></input>
                  <label for="rating9" ></label>
                  <input type="radio" name='rating6' id="rating10"></input>
                  <label for="rating10" ></label>
                  <br></br><br></br>
                </div>
              </div>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>
          <div className="item-ins">
            <img className="item-image-ins" src={english} alt="" />
            <span className="item-title">English</span>
            <div className="item-details">
              <p>Grade: 10 <br /> Instructor: Jennie Crigler </p>
              <p>BSc University of Kelaniya</p>
              <div className='star-rating'>
                <div class='rating'>
                  <input type="radio" name='rating11' id="rating11"></input>
                  <label for="rating11" ></label>
                  <input type="radio" name='rating11' id="rating12"></input>
                  <label for="rating12"></label>
                  <input type="radio" name='rating11' id="rating13"></input>
                  <label for="rating13"></label>
                  <input type="radio" name='rating11' id="rating14"></input>
                  <label for="rating14" ></label>
                  <input type="radio" name='rating11' id="rating15"></input>
                  <label for="rating15" ></label>
                  <br></br><br></br>
                </div>
              </div>
              <button className="btn item-button" type="button">View</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default StudentHome;
