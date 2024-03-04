import React from 'react';
import './css/stdCourse.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import maths from './img/maths.png';
import science from './img/science.jpg';
import english from './img/english.jpeg';
import NavBar from './NavBarStudent';
import Footer from './Footer';

const StudentCourseHome = () => {
  return (
    <>
      <style>
        {`
          body {
            background-colour:#ffffff;
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
      <section className="container content-section">
        <div className="items">
          <div className="item">
            <img className="item-image" src={maths} alt="" />
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
              <button className="btn1 item-button" type="button">View</button>
            </div>
          </div>

          <div className="item">
            <img className="item-image" src={science} alt="" />
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
              <button className="btn1 item-button" type="button">View</button>
            </div>
          </div>
          <div className="item">
            <img className="item-image" src={english} alt="" />
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
              <button className="btn1 item-button" type="button">View</button>
            </div>
          </div>
          
          {/* Repeat similar blocks for other courses */}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default StudentCourseHome;
