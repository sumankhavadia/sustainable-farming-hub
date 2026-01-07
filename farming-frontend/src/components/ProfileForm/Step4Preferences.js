import React from "react";

const Step4Experience = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Step 4: Experience</h2>

      <div className="mb-4">
        <label className="block">Years of Experience</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Preferred Crops</label>
        <input
          type="text"
          name="preferred_crops"
          value={formData.preferred_crops}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Seasonal Crop Details</label>
        <textarea
          name="seasonal_details"
          value={formData.seasonal_details}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default Step4Experience;
