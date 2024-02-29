import React from 'react';
import './css/stdCourse.css'; // Import your CSS file
import logo from './img/logo.jpg'; // Update the path as needed
import coursesImage from './img/myCourses.jpg'; // Update the path as needed
import student1 from './img/student1.jpg';


const AcceptStudent = () => {
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

      <section className="containerA content-section">
        <div className="wrapper">
          <div className="profile">
            <img className="profile-image" src={student1} alt="" />
            <span className="profile-title">Amelia Charlotte</span>
            <div className="profile-details">
              <div className='star-rating'>
                <div class='ratingA'>
                  <input type="radio" name='rating1' id="rating1"></input>
                  <label for="rating1" ></label>
                  <input type="radio" name='rating1' id="rating2"></input>
                  <label for="rating2"></label>
                  <input type="radio" name='rating1' id="rating3"></input>
                  <label for="rating3"></label>
                  <input type="radio" name='rating1' id="rating4"></input>
                  <label for="rating4" ></label>
                  <input type="radio" name='rating1' id="rating5"></input>
                  <label for="rating5" ></label><h6 class="value">4.6</h6>
                  <br/>
                  <br/><br/>
                </div>
              </div>
              
              <br/>
              <div className="f">
                <div className="flexBox">
                <input type="button" value="Accept Student"className="button accept-btn"
                  onClick={() => window.location.href = 'instructorSignUp.html'}/>
                </div>
              <br/>
                <div className="flexBox">
                <input type="button" value="Reject Student" className="button reject-btn"
                  onClick={() => window.location.href = 'studentHome.html'}/>
                </div>
              </div>
            </div> 
          </div>
          <form>
            <div class="form-group">
              <span>Name</span>
              <input type="text" name="name" placeholder="Name" class="form-control"/>
            </div>
            <div class="form-group">
              <span>Grade</span>
              <input type="text" name="Grade" placeholder="Grade" class="form-control"/> 
            </div>
            <div class="form-group">
              <span>Subject</span>
              <input type="text" name="Subject" placeholder="Subject" class="form-control"/> 
            </div>
            <div class="form-group">
              <span>Preferences </span>
              <input type="text" name="Preferences " placeholder="Preferences" class="form-control"/> 
            </div>
          </form>
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

export default AcceptStudent;
