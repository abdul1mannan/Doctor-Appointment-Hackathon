import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Form from './Form';
import { useParams, useNavigate } from 'react-router-dom';
import topbar from 'topbar';
import DarkTopLoaderBar from '../../topbar/topbar';

const AppointmentForm = ({ getProfileById, profile: { profileById } }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    DarkTopLoaderBar();

    useEffect(() => {
        getProfileById(id);
    }, [getProfileById, id]);

    return (
        <Fragment>
            {topbar.show()}
            <section id="Login">
                <div className="container">
                    <div className="common-form">
                        <div className="form-side">
                            {profileById !== null ? (
                                <Form profile={profileById.doctor} navigate={navigate} doctorId={profileById.doctor._id} />
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="img-side">
                            <img src={require("../../img/calendar.svg")} alt="" className="register-user" />
                        </div>
                    </div>
                </div>
            </section>
            {topbar.hide()}
        </Fragment>
    );
};

AppointmentForm.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(AppointmentForm);