import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const DailyTip = () => {
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/tips/farming-tips/")
      .then((response) => {
        setTip(response.data.tip || response.data.message); // Adjust if key is different
        setLoading(false);
      })
      .catch(() => {
        setError("🌧️ Failed to load today's tip. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-lime-200 px-4">
      {loading ? (
        <div className="text-xl text-gray-700 animate-pulse">🌾 Fetching today’s wisdom...</div>
      ) : error ? (
        <div className="text-xl text-red-600">{error}</div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-green-300"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
            🌱 Daily Farming Tip
          </h2>
          <p className="text-gray-800 text-lg text-center leading-relaxed">
            {tip}
          </p>
          <div className="mt-6 text-center text-sm text-gray-500">Updated daily with 💚</div>
        </motion.div>
      )}
    </div>
  );
};

export default DailyTip;
