import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import {
  ThermometerSun,
  Leaf,
  BookOpenCheck,
  User,
  Sprout,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasProfile, setHasProfile] = useState(null);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user-profile/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        });

        if (response.data) {
          setHasProfile(true);
        } else {
          setHasProfile(false);
        }
      } catch (error) {
        console.log("User profile not found. Redirecting to create profile.");
        setHasProfile(false);
      }
    };

    checkProfile();
  }, [location.pathname]); // Re-run check when pathname changes

  const features = [
    {
      title: "Weather Forecast",
      icon: <ThermometerSun className="text-blue-500 w-8 h-8" />,
      desc: "Accurate 5-day forecast for your farm.",
      onClick: () => navigate("/weather"),
    },
    {
      title: "Soil Analysis",
      icon: <Leaf className="text-green-500 w-8 h-8" />,
      desc: "Analyze soil quality and health.",
      onClick: () => alert("Coming soon..."),
    },
    {
      title: "Farming Tips",
      icon: <BookOpenCheck className="text-yellow-500 w-8 h-8" />,
      desc: "Daily tips tailored to your needs.",
      onClick: () => navigate("/dailytips"),
    },
    {
      title: "Crop Prediction",
      icon: <Sprout className="text-pink-500 w-8 h-8" />,
      desc: "AI-powered crop recommendation.",
      onClick: () => navigate("/crop-predict"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6 py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          🌱 Smart Farming Dashboard
        </h1>

        {/* Profile Completion Icon */}
        <div
          onClick={() => {
            if (hasProfile === true) {
              navigate("/user-profile");
            } else if (hasProfile === false) {
              navigate("/create-profile");
            } else {
              alert("Loading profile info...");
            }
          }}
          className="flex items-center gap-3 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow hover:shadow-lg cursor-pointer transition"
        >
          <User className="text-purple-600 w-6 h-6" />
          <span className="font-medium text-gray-800 dark:text-white">
            {hasProfile === null
              ? "Loading Profile..."
              : hasProfile
              ? "View Profile"
              : "Complete Profile"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={feature.onClick}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h2>
              {feature.icon}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
