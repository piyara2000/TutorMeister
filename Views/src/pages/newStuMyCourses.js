import React, { useEffect } from "react";
import "./css/newStuMyCourses.css";
import englishIns from "./img/englishIns.jpg";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import the styles

const NewStuMyCourses = () => {
  const initializeDatePicker = () => {
    flatpickr("#datepicker", {
      enableTime: false, // Set to true if you need to include time
      dateFormat: "Y-m-d", // Customize the date format
    });
  };

  // Call the initializeDatePicker function after the component mounts
  useEffect(() => {
    initializeDatePicker();
  }, []);

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

      <div className="containerCourse">
        <div className="profile">
          <img className="profile-image" src={englishIns} alt="" />
          <div className="notify-btns">
            <div>
              <input
                type="button"
                value="Send a notification  "
                className="button notify-btn1"
                onClick={() => (window.location.href = "/student-course-home")}
              />
            </div>
            <div>
              <input
                type="button"
                value="Schedule a meeting"
                className="button notify-btn1"
                onClick={() => (window.location.href = "/student-course-home")}
              />
            </div>
            <div className="profile-itemdate">
              <span className="labelDate">Upcoming Sessions</span>
              <input type="text" id="datepicker" placeholder="--" />
            </div>
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
                    value="Rate and Review"
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

export default NewStuMyCourses;
