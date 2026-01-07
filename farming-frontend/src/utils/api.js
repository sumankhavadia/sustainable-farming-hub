import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api"; // update this if your backend URL is different

// Helper to get token from localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// ✅ Fetch dashboard data (secured)
export const fetchDashboardData = async () => {
  const response = await axios.get(`${API_BASE_URL}/dashboard/`, getAuthHeaders());
  return response.data;
};






