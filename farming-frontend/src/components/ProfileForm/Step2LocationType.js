import React from "react";

const Step2LocationType = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Step 2: Location Information</h2>

      <div className="mb-4">
        <label className="block">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">District</label>
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Latitude</label>
        <input
          type="text"
          name="latitude"
          value={formData.latitude}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block">Longitude</label>
        <input
          type="text"
          name="longitude"
          value={formData.longitude}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default Step2LocationType;

