import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateDoctorRoute = ({
  authDoctor: { isDoctorAuthenticated, loadingDoctor },
}) => {
  return loadingDoctor ? (
    <div>Loading...</div>
  ) : !isDoctorAuthenticated ? (
    <Navigate to="/loginDoctor" />
  ) : (
    <Outlet />
  );
};

PrivateDoctorRoute.propTypes = {
  authDoctor: PropTypes.shape({
    isDoctorAuthenticated: PropTypes.bool,
    loadingDoctor: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  authDoctor: state.authDoctor,
});

export default connect(mapStateToProps)(PrivateDoctorRoute);
