import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/Signup";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./pages/authentication/PrivateRoute";
import Weather from "./pages/Weather";
import CropPredictionForm from "./components/CropPredictionForm";
import DailyTip from "./components/DailyTip";
import FeaturesPage from './pages/FeaturesPage';
import CreateProfile from "./pages/CreateProfile"; // Profile Creation page
import ProfileView from "./pages/ProfileView"; // User Profile page

function App() {
  const [profileCompleted, setProfileCompleted] = useState(false);

  useEffect(() => {
    // Check profile completion status in localStorage
    const profileStatus = localStorage.getItem("profileCompleted");
    setProfileCompleted(profileStatus === "true");
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<FeaturesPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Dynamic Dashboard Text */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard dashboardText={profileCompleted ? "Your Profile" : "Complete Profile"} />
            </PrivateRoute>
          }
        />

        <Route
          path="/weather"
          element={
            <PrivateRoute>
              <Weather />
            </PrivateRoute>
          }
        />
        <Route
          path="/crop-predict"
          element={
            <PrivateRoute>
              <CropPredictionForm />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/dailytips"
          element={
            <PrivateRoute>
              <DailyTip />
            </PrivateRoute>
          }
        />

        {/* Route for Profile Creation (Only for Users without a Profile) */}
        <Route
          path="/create-profile"
          element={
            <PrivateRoute>
              <CreateProfile />
            </PrivateRoute>
          }
        />
        
        {/* Route to view profile once it's completed */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileView />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
