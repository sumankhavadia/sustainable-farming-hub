// src/pages/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login/', formData);
  
      // 🔍 This will show you the full response from the backend
      console.log("Login API Response:", res.data);
  
      // ✅ Save the token from response — change `access` to `token` if needed
      localStorage.setItem('token', res.data.tokens.access); // ✅ 'tokens.access' not just 'token'

  
      // ✅ Navigate to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert('Login failed. Please check your credentials.');
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account? <a href="/signup" className="text-green-700 font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
