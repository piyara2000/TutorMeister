import React from "react";
import "./css/myCourses.css";
// import logo from "./img/RectangleLogo.png"; // Update the path as needed
// import loginImage from "./img/login.jpg"; // Update the path as needed

const myCourses = () => {
  return (
    <>
      <style>
        {`
          body {
           
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
        `}
      </style>
      

      <div className="home-footer">
        <ul>
          <li>
            <a href="">Help desk</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
        <hr />
        <p>
          <center> © 2023, TutorMeister, Inc.</center>
        </p>
      </div>
    </>
  );
};

export default myCourses;
