import React, { Fragment, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import topbar from "topbar";
import DarkTopLoaderBar from "../../topbar/topbar";

import "../../App.css";

const Landing = ({ isDoctorAuthenticated, isUserAuthenticated }) => {
  useEffect(() => {
    topbar.hide();

    return () => {
      topbar.hide();
    };
  }, []);

  if (isDoctorAuthenticated === null || isUserAuthenticated === null) {
    // Handle the case where authentication status is not yet determined
    return null; // or loading indicator, redirect, etc.
  }

  if (isDoctorAuthenticated) {
    return <Navigate to="/dashboard" />;
  } else if (isUserAuthenticated) {
    return <Navigate to="/appointment" />;
  }

  return (
    <Fragment>
      <section id="landing">
        <div className="container">
          <div className="img">
            <div className="img-1">
              <img  alt="Doctor illustration" />
            </div>
          </div>
          <div className="heading">
            <h1 className="main-heading">Find Your Best Doctor &</h1>
            <h1 className="main-heading">
              Book Your <span className="main-span">Appointment.</span>
            </h1>
          </div>
          <div className="landing-position">
            <div className="signup">
              <div className="doctor-signup">
                <h2 className=" item heading-sub">
                  <strong>For Doctors</strong>
                </h2>
                <p className="item description">
                  Patients Waiting For Your Best Service
                </p>

                <Link
                  to="/registerDoctor"
                  type="button"
                  className="item btn btn-info landing-btn "
                >
                  Sign Up
                </Link>
              </div>
              <div className="user-signup">
                <h2 className="item heading-sub">
                  <strong>For Users</strong>
                </h2>
                <p className="item special description">
                  Get yourself treated by Best Doctors
                </p>
                <Link
                  to="/registerUser"
                  className="item btn btn-outline-info landing-btn"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isDoctorAuthenticated: PropTypes.bool,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isDoctorAuthenticated: state.authDoctor.isDoctorAuthenticated,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps)(Landing);
