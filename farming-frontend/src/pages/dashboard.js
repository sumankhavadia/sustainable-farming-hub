
import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          🌦 <strong>Weather</strong><br />
          28°C, Sunny
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          🧪 <strong>Soil Moisture</strong><br />
          45% Optimal
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          🌱 <strong>Crop Tips</strong><br />
          Irrigate in the morning for best results.
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
