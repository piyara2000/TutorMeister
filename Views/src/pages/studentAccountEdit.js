import React from "react";
import './css/accountEditPage.css';
import loginImage from './img/login.jpg';
import science from './img/science.jpg'

const StudentAccountEditPage = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Sign-Up</title>
            <link rel="stylesheet" href="css/stdSignUp.css" />
            <style>
                {`
          body {
            background-image: url(${loginImage});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
          }
        `}
            </style>
            <div className="containerStdAcc">
                <form action="" className="form3">
                    <div className="row">
                        <h3 className="heading-accEditPage">Edit Profile</h3>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Change Profile Picture:</label>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <img className="profileImageUpload" src={science} alt="" />
                                <input
                                    type="button"
                                    value="Choose File"
                                    className="button chooseFile-btn"
                                />
                            </div>
                            <div className="flexLabel">
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Change Mobile Number:</label>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <input type="text" className="labelStdAcc" placeholder="New Mobile Number" />
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Change Email Address:</label>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <input type="text" className="labelStdAcc" placeholder="New Email" />
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Change Password:</label>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <input type="password" className="labelStdAcc" placeholder="Current Password" />
                            </div>
                            <div className="flexLabel2">
                                <input type="password" className="labelStdAcc" placeholder="New Password" />
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Educational Qualification:</label>
                            </div>
                            <div className="flexLabel2">
                                <select id="eduQual" className="labelStdAcc">
                                    <option value="" disabled selected>Choose an option</option>
                                    <option value="school">School</option>
                                    <option value="higherEducation">Higher Education</option>
                                    <option value="undergraduate">Undergraduate</option>
                                    <option value="graduated">Graduated</option>
                                </select>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Preferred Learning Style:</label>
                            </div>
                            <div className="flexLabel2">
                                <select id="eduQual" className="labelStdAcc">
                                    <option value="" disabled selected>Choose an option</option>
                                    <option value="visual">Visual</option>
                                    <option value="auditory">Auditory</option>
                                    <option value="kinesthetic">Kinesthetic</option>
                                </select>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Learning Pace:</label>
                            </div>
                            <div className="flexLabel2">
                                <select id="eduQual" className="labelStdAcc">
                                    <option value="" disabled selected>Choose an option</option>
                                    <option value="slow">Slow</option>
                                    <option value="average">Average</option>
                                    <option value="fast">Fast</option>
                                </select>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Learning Style:</label>
                            </div>
                            <div className="flexLabel2">
                                <select id="eduQual" className="labelStdAcc">
                                    <option value="" disabled selected>Choose an option</option>
                                    <option value="oneOnOne">One-on-one</option>
                                    <option value="group">Group</option>
                                    <option value="both">Both</option>
                                </select>
                            </div>
                        </div>
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Learning Mode:</label>
                            </div>
                            <div className="flexLabelRadioAccEdit">
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
                        <div className="flexPage2">
                            <div className="flexLabel">
                                <label className="label-eduQual">Learning Preferences:</label>
                            </div>
                            <div className="flexLabel2">
                                <input type="text" className="richTextStdAccEdit" placeholder="" />
                            </div>
                        </div>
                        <div className="flex3AccEditPage2">
                            <div className="flexBox">
                            </div>
                            <div className="flexBox">
                                <input
                                    type="button"
                                    value="Save Changes"
                                    className="button register-btn"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default StudentAccountEditPage;
