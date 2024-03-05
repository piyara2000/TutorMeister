import React from 'react';
import './css/stdCourse.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import coursesImage from './img/myCourses.jpg'; // Update the path as needed
import student1 from './img/student1.jpg';
import student2 from './img/student2.jpg';
import student3 from './img/student3.jpg';
import NavBar from './NavBarInstructor';
import Footer from './Footer';

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
      
      <NavBar/>
      <div className='search-margin'>
        <input type="text" className="instructor-search" id = "search" placeholder="Search" />
      </div>


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
      <Footer/>
    </>
  );
};

export default InstructorCourseHome;
