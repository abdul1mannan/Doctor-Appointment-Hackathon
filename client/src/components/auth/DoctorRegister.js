import React, { useState, Fragment } from "react";
import { Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/authDoctor";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import topbar from "topbar";
import DarkTopLoaderBar from "../../topbar/topbar";
import { Store } from 'react-notifications-component';
// import 'animate.css/animate.min.css'  

const DoctorRegister = ({ setAlert, register, isDoctorAuthenticated }) => {

  DarkTopLoaderBar();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
     
      Store.addNotification({
        title: "Password Error",
       message: "Password Not Match With Confirm Password",
       type: "danger",
       insert: "top",
       container: "bottom-center",
       animationIn: ["animate__animated", "animate__fadeIn"],
       animationOut: ["animate__animated", "animate__fadeOut"],
       dismiss: {
         duration: 2000,
         onScreen: true
       }
     });
    } else {
      register({ name, email, password });
     
    }
  };
  if (isDoctorAuthenticated) {


    Store.addNotification({
               
      message: "Login Sucessful",
      type: "success",
      insert: "top",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true
      }
    });


   


    return  <Navigate to="/dashboard" />;
    

      
 
    
  }

  return (
    <Fragment>
      {topbar.show()}
      

      <section id="common">
        <div className="container">
          <div className="common-form">
            <div className="form-side">
              <div className="heading-common">
                <h1>
                  <strong>Doctor</strong>
                  <i className="fas fa-user-md"></i>
                </h1>
              </div>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <label className="label" for="exampleInputEmail1">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address."
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    This site uses{" "}
                    <a
                      href="https://en.gravatar.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gravatar{" "}
                    </a>{" "}
                    so if you want a profile image, use a Gravatar email
                  </small>
                </div>
                <div className="form-group">
                  <label className="label" for="exampleInputEmail1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name."
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="exampleInputPassword1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password."
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label className="label" for="exampleInputPassword1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password again."
                    name="password2"
                    value={password2}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <input type="submit" className="btn btn-info" value="Sign Up" />
              </form>
            </div>
            <div className="img-side">
              <img
                className="register-user"
                src={require("../../img/newDoctor1.svg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {topbar.hide()}
    </Fragment>
  );
};

DoctorRegister.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isDoctorAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(DoctorRegister);
