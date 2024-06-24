import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const PrivateDoctorRoute = ({component: Component, 
    authDoctor: {isDoctorAuthenticated, loadingDoctor},
    ...rest}) => (
        <Route
            {...rest}
            render = {props =>     
                !isDoctorAuthenticated && !loadingDoctor ? (
                    <Navigate to="/loginDoctor" />
                ) : (
                    <Component {...props} />
                )
            }
        />
);

PrivateDoctorRoute.propTypes = {
    authDoctor: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    authDoctor: state.authDoctor
});

export default connect(mapStateToProps)(PrivateDoctorRoute);
