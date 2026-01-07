import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

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






