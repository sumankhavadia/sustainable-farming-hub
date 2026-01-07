import React from "react";

const Step3FarmDetails = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Step 3: Farm Details</h2>

      <div className="mb-4">
        <label className="block">Farmer Type</label>
        <select
          name="farmer_type"
          value={formData.farmer_type}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="crop">Crop Farmer</option>
          <option value="livestock">Livestock Farmer</option>
          <option value="mixed">Mixed Farming</option>
          <option value="organic">Organic/Sustainable</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block">Farm Size (in acres)</label>
        <input
          type="number"
          name="farm_size"
          value={formData.farm_size}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Soil Type</label>
        <select
          name="soil_type"
          value={formData.soil_type}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="sandy">Sandy</option>
          <option value="clay">Clay</option>
          <option value="silt">Silt</option>
          <option value="peat">Peat</option>
          <option value="chalk">Chalk</option>
          <option value="loam">Loam</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block">Irrigation Method</label>
        <select
          name="irrigation_method"
          value={formData.irrigation_method}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="drip">Drip</option>
          <option value="sprinkler">Sprinkler</option>
          <option value="surface">Surface</option>
          <option value="manual">Manual</option>
        </select>
      </div>
    </div>
  );
};

export default Step3FarmDetails;
