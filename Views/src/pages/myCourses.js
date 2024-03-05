import React from "react";
import "./css/myCourses.css";
import englishIns from "./img/englishIns.jpg";
import NavBar from "./NavBarStudent";
import Footer from "./Footer";
// import logo from "./img/RectangleLogo.png"; // Update the path as needed
// import loginImage from "./img/login.jpg"; // Update the path as needed

const myCourses = () => {
  return (
    <>
      <style>
        {`
          body {
            background-color: #9EE493;
          }
        `}
      </style>
      <NavBar/>
      <div className="containerCourse">
        <div className="profile1">
          <img className="profile-image" src={englishIns} alt="" />
          <div className="notify-btns">
          <span class="labelpro"> Kibo Underwood</span>
           
          
          </div>
        </div>

        <div className="container-formCourse">
          <form action="" className="formCourse">
            <div className="heading1">
              <h4>Meet The Tutor</h4>
              <div className="vdpath">
                <video src="path_to_video.mp4" controls></video>
              </div>
            </div>

            <div className="heading2">
              <h4>About the Tutor</h4>
            </div>

            <div className="row">
              <div class="profile-container">
                <div class="profile-item">
                  <span class="label">Name:</span> Kibo Underwood
                </div>

                <div class="profile-item">
                  <span class="label">Description:</span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>

                <div class="profile-item">
                  <span class="label">Subjects:</span> English, Mathematics
                </div>

                <div class="profile-item">
                  <span class="label">Certifications:</span> Certified Academic
                  Tutor (CAT), National Tutoring Association (NTA) Certification
                </div>
              </div>

              <div className="heading2">
                <h4>Ratings and Reviews</h4>
              </div>
              <div className="star-rating">
                <div class="ratingA">
                  <input type="radio" name="rating1" id="rating1"></input>
                  <label for="rating1"></label>
                  <input type="radio" name="rating1" id="rating2"></input>
                  <label for="rating2"></label>
                  <input type="radio" name="rating1" id="rating3"></input>
                  <label for="rating3"></label>
                  <input type="radio" name="rating1" id="rating4"></input>
                  <label for="rating4"></label>
                  <input type="radio" name="rating1" id="rating5"></input>
                  <label for="rating5"></label>
                  <h6 class="value">4.6</h6>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div className="review">
                <p>
                  Great! <br /> He helped me feel more prepared for an exam I
                  had the day before on linear programming with very short
                  notice. He makes sure you understand it before going forward,
                  and is patient with you. I recommend him!!
                </p>
              </div>

              <div className="flexRate">
                <div className="flexRateBox">
                  <input
                    type="button"
                    value="Join Course"
                    className="button rate-btn"
                    onClick={() =>
                      (window.location.href = "/student-course-home")
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default myCourses;
