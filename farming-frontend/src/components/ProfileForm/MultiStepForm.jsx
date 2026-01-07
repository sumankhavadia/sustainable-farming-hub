import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Step1BasicInfo from "./Step1BasicInfo";
import Step2LocationType from "./Step2LocationType";
import Step3FarmDetails from "./Step3FarmDetails";
import Step4Preferences from "./Step4Preferences";
import Step5ReviewSubmit from "./Step5ReviewSubmit";
import ProgressBar from "./ProgressBar";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    pincode: "",
    country: "",
    latitude: "",
    longitude: "",
    farmer_type: "",
    farm_size: "",
    soil_type: "",
    irrigation_method: "",
    experience: "",
    preferred_crops: "",
    seasonal_details: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const submitProfile = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/create-profile/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Profile created successfully!");
        navigate("/dashboard");
      } else {
        alert("Failed to create profile. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting profile:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        alert(`Error: ${error.response.data.message || error.response.statusText}`);
      } else {
        alert("There was an error submitting your profile. Please try again.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitProfile();
  };

  return (
    <div className="multi-step-form-container max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">User Profile Form</h1>
      <ProgressBar currentStep={currentStep} totalSteps={5} />

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <Step1BasicInfo formData={formData} handleInputChange={handleInputChange} />
        )}
        {currentStep === 2 && (
          <Step2LocationType formData={formData} handleInputChange={handleInputChange} />
        )}
        {currentStep === 3 && (
          <Step3FarmDetails formData={formData} handleInputChange={handleInputChange} />
        )}
        {currentStep === 4 && (
          <Step4Preferences formData={formData} handleInputChange={handleInputChange} />
        )}
        {currentStep === 5 && (
          <Step5ReviewSubmit formData={formData} />
        )}

        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <button
              type="button"
              className="px-6 py-2 bg-gray-300 text-white rounded-md"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
          )}
          {currentStep < 5 ? (
            <button
              type="button"
              className="px-6 py-2 bg-teal-600 text-white rounded-md"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white rounded-md"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;

