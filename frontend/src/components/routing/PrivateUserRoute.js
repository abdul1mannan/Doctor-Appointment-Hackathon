import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateUserRoute = ({ authUser: { isUserAuthenticated, loadingUser } }) => {
  // Render a loading indicator while authentication status is being determined
  if (loadingUser) {
    return <div>Loading...</div>;
  }

  // Redirect to the login page if the user is not authenticated
  if (!isUserAuthenticated) {
    return <Navigate to="/loginUser" />;
  }

  // Render the nested routes if the user is authenticated
  return <Outlet />;
};

PrivateUserRoute.propTypes = {
  authUser: PropTypes.shape({
    isUserAuthenticated: PropTypes.bool.isRequired,
    loadingUser: PropTypes.bool.isRequired,
  }).isRequired,
};

// Map the authUser state from Redux to the component's props
const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(PrivateUserRoute);
