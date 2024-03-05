import React from 'react';
import './css/stdSignUp.css'; 
import './css/stdHome.css';
import './css/createCourse.css';
import logo from './img/logo.jpg'; // Update the path as needed
import homeImage from './img/home.jpg';
import NavBar from './NavBarInstructor';
import Footer from './Footer';

const CreateCourse = () => {
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
      <div className="containterCreateCourse">
        <form action="" className="formCreate">
          <h3 className="heading">Create A Course</h3>
          <div className="row">
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Course name:</label>
              </div>
              <div className="flexLabalCreate">
                <input type="text" className="richText" id="courseName" placeholder="" />
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Subject:</label>
              </div>
              <div className="flexLabalCreate">
                <input type="text" className="richText" id="Subject" placeholder="" />
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Educational Level:</label>
              </div>
              <div className="flexLabalCreate">
                <select id="educationalLevel" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="school">School</option>
                  <option value="higherEducation">Higher Education</option>
                  <option value="undergraduate">Undergraduate</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Grade/Level:</label>
              </div>
              <div className="flexLabalCreate">
                <input type="text" className="richText" id="Grade " placeholder="" />
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Teaching Style:</label>
              </div>
              <div className="flexLabalCreate">
                <select id="teachingStyle" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="visual">Visual</option>
                  <option value="auditory">Auditory</option>
                  <option value="kinesthetic">Kinesthetic</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Teaching Format:</label>
              </div>
              <div className="flexLabalCreate">
                <select id="teachingFormat" className="educational-qualification">
                  <option value="" disabled selected>Choose an option</option>
                  <option value="oneOnOne">One-on-one</option>
                  <option value="group">Group</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>
            <div className="flexPage2">
              <div className="flexLabel flexCreate">
                <label className="label-create-course">Teaching Mode:</label>
              </div>
              <div className="flexLabelCreateRadio">
                <div class="optionGroup">
                  <input type="radio" id="inPerson" name="learningMode" value="inPerson" className="radioButton" />
                  <label for="inPerson">In person</label>
                </div>
                <div class="optionGroup">
                  <input type="radio" id="online" name="learningMode" value="online" className="radioButton" />
                  <label for="online">Online</label>
                </div>
              </div>
            </div>
            <div className="flex3Page2">
              <div className="flexBox">
                <input
                  id='btnAddCourse'
                  type="button"
                  value="Add Course"
                  className="button register-btn"
                  onClick={() => window.location.href = '/instructor-home'}
                />
              </div>
              <div className="flexBox">
                <input
                  id='btnCancel'
                  type="button"
                  value="Cancel"
                  className="button signInstructor-btn"
                  onClick={() => window.location.href = '/instructor-home'}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default CreateCourse;
