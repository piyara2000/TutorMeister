import React from "react";
import './css/accountEditPage.css';
import loginImage from './img/login.jpg';
import science from './img/science.jpg'

const instructorAccountEditPage = () => {
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

export default instructorAccountEditPage;