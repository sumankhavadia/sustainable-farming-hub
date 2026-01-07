import React, { useState } from "react";
import axios from "axios";

const CropPredictionForm = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setFormSubmitted(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/feature/predict-crop/", 
        formData
      );
      setPrediction(response.data.predicted_crop);
    } catch (err) {
      console.error("Error predicting crop:", err);
    } finally {
      setLoading(false);
    }
  };

  // Basic input validation
  const isFormValid = Object.values(formData).every((field) => field !== "");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {!formSubmitted ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Crop Prediction Form
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Nitrogen */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="nitrogen">
                Nitrogen (N) in the soil:
              </label>
              <input
                type="number"
                name="nitrogen"
                id="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phosphorus */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="phosphorus">
                Phosphorus (P) in the soil:
              </label>
              <input
                type="number"
                name="phosphorus"
                id="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Potassium */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="potassium">
                Potassium (K) in the soil:
              </label>
              <input
                type="number"
                name="potassium"
                id="potassium"
                value={formData.potassium}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Temperature */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="temperature">
                Temperature (°C):
              </label>
              <input
                type="number"
                name="temperature"
                id="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Humidity */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="humidity">
                Humidity (%):
              </label>
              <input
                type="number"
                name="humidity"
                id="humidity"
                value={formData.humidity}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* pH */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="ph">
                pH of the soil:
              </label>
              <input
                type="number"
                step="0.1"
                name="ph"
                id="ph"
                value={formData.ph}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Rainfall */}
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="rainfall">
                Rainfall (mm):
              </label>
              <input
                type="number"
                name="rainfall"
                id="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`${
                  isFormValid
                    ? "bg-blue-500 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white p-3 w-full rounded-md transition-all duration-300`}
              >
                {loading ? "Predicting..." : "Predict Crop"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="flex justify-center items-center h-64 mt-8 p-4">
          <div className="bg-white shadow-xl p-8 rounded-lg text-center w-full max-w-lg animate__animated animate__fadeIn">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Prediction Result</h3>
            <p className="text-3xl font-bold text-green-500">
              Recommended Crop: <span>{prediction}</span>
            </p>
            <p className="mt-4 text-gray-600">
              Based on your soil and weather conditions, we recommend growing {prediction}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CropPredictionForm;

