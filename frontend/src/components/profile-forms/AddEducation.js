import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import topbar from 'topbar';
import DarkTopLoaderBar from '../../topbar/topbar';

const AddEducation = ({ addEducation }) => {
    const navigate = useNavigate();
    
    DarkTopLoaderBar();
    
    const [formData, setFormdata] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => setFormdata({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, navigate);
    };

    return (
        <Fragment>
            {topbar.show()}
            <section id="Login">
                <div className="container">
                    <div style={{ height: "auto" }} className="common-form">
                        <div className="form-side">
                            <div className="heading-common">
                                <h1><strong>Add Education</strong>
                                    <i className="fas fa-university"></i>
                                </h1>
                                <p className="lead">
                                    <i className="fas fa-user"></i> Add any school, Medicalcamp, etc that you have attended
                                </p>
                            </div>
                            <form onSubmit={onSubmit}>
                                <small>* = required field</small>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="* School"
                                        name="school"
                                        value={school}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="* Degree or Certification"
                                        name="degree"
                                        value={degree}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="* Field of study"
                                        name="fieldofstudy"
                                        value={fieldofstudy}
                                        onChange={onChange}
                                        required
                                    />
                                </div>

                                <h6>From Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control" name="from" value={from} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <p><input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                                        setFormdata({ ...formData, current: !current });
                                        toggleDisabled(!toDateDisabled);
                                    }} /> {' '} Current School</p>
                                </div>
                                <h6>To Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="to"
                                        value={to}
                                        onChange={onChange}
                                        disabled={toDateDisabled ? 'disabled' : ''}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="description"
                                        className="form-control"
                                        placeholder="* Program Description"
                                        value={description} onChange={onChange}></textarea>
                                    <small className="form-text">Tell us a little about the program.</small>
                                </div>
                                <input type="submit" className="btn btn-info" />{' '}
                                <Link to="/dashboard" type="submit" className="btn btn-outline-secondary">Go Back</Link>
                            </form>
                            <br />
                        </div>
                        <div className="img-side">
                            <img src={require("../../img/graduation.svg")} alt="" className="register-user" />
                        </div>
                    </div>
                </div>
            </section>
            {topbar.hide()}
        </Fragment>
    );
};

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);