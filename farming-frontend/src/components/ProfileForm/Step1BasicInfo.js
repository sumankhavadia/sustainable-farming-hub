import React, { useState } from "react";

const Step1BasicInfo = ({ formData, handleInputChange }) => {
  const [errors, setErrors] = useState({
    full_name: "",
    phone: "",
  });

  const validate = (name, value) => {
    let error = "";
    if (name === "full_name" && !value) error = "Full name is required";
    if (name === "phone" && !/^\d{10}$/.test(value)) error = "Phone number is invalid (must be 10 digits)";
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleInputChange(e);
    validate(name, value);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Step 1: Basic Information</h2>

      <div className="mb-4">
        <label className="block">Full Name</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.full_name && <p className="text-red-500">{errors.full_name}</p>}
      </div>

      <div className="mb-4">
        <label className="block">Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Step1BasicInfo;
