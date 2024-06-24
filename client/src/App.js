import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import LoginUser from "./components/auth/LoginUser";
import LoginDoctor from "./components/auth/LoginDoctor";
import DoctorRegister from "./components/auth/DoctorRegister";
import UserRegister from "./components/auth/UserRegister";
import Dashboard from "./components/dashboard/Dashboard";
import AddEducation from "./components/profile-forms/AddEducation";
import AddExperience from "./components/profile-forms/AddExperience";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import PrivateDoctorRoute from "./components/routing/PrivateDoctorRoute";
import Appointment from "./components/user/Appointments";
import AppointmentForm from "./components/bookappointment/AppointmentForm";
import PrivateUserRoute from "./components/routing/PrivateUserRoute";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authUser";
import { loadDoctor } from "./actions/authDoctor";
import setAuthToken from "./utils/setAuthToken";
import { ReactNotifications } from "react-notifications-component";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Footermain = () => {
  return <footer></footer>;
};

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadDoctor());
  }, []);

  return (
    <>
      <div>
        <ReactNotifications />
      </div>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
            <div className="container">
              <Alert />
              <Routes>
                <Route path="/loginUser" element={<LoginUser />} />
                <Route path="/loginDoctor" element={<LoginDoctor />} />
                <Route path="/registerDoctor" element={<DoctorRegister />} />
                <Route path="/registerUser" element={<UserRegister />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/doctor/:id" element={<Profile />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateDoctorRoute>
                      <Dashboard />
                    </PrivateDoctorRoute>
                  }
                />
                <Route
                  path="/add-education"
                  element={
                    <PrivateDoctorRoute>
                      <AddEducation />
                    </PrivateDoctorRoute>
                  }
                />
                <Route
                  path="/add-experience"
                  element={
                    <PrivateDoctorRoute>
                      <AddExperience />
                    </PrivateDoctorRoute>
                  }
                />
                <Route
                  path="/create-profile"
                  element={
                    <PrivateDoctorRoute>
                      <CreateProfile />
                    </PrivateDoctorRoute>
                  }
                />
                <Route
                  path="/edit-profile"
                  element={
                    <PrivateDoctorRoute>
                      <EditProfile />
                    </PrivateDoctorRoute>
                  }
                />
                <Route
                  path="/appointment"
                  element={
                    <PrivateUserRoute>
                      <Appointment />
                    </PrivateUserRoute>
                  }
                />
                <Route
                  path="/appointment/:id"
                  element={
                    <PrivateUserRoute>
                      <AppointmentForm />
                    </PrivateUserRoute>
                  }
                />
              </Routes>
            </div>
            <Footermain />
          </Fragment>
        </Router>
      </Provider>
    </>
  );
};

export default App;
