import React from "react";

const Step5ReviewSubmit = ({ formData, handleSubmit }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Step 5: Review and Submit</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Full Name: {formData.full_name}</h3>
        <h3 className="font-semibold">Phone Number: {formData.phone}</h3>
        <h3 className="font-semibold">Address: {formData.address}</h3>
        <h3 className="font-semibold">District: {formData.district}</h3>
        <h3 className="font-semibold">Pincode: {formData.pincode}</h3>
        <h3 className="font-semibold">Country: {formData.country}</h3>
        <h3 className="font-semibold">Latitude: {formData.latitude}</h3>
        <h3 className="font-semibold">Longitude: {formData.longitude}</h3>
        <h3 className="font-semibold">Farmer Type: {formData.farmer_type}</h3>
        <h3 className="font-semibold">Farm Size: {formData.farm_size} acres</h3>
        <h3 className="font-semibold">Soil Type: {formData.soil_type}</h3>
        <h3 className="font-semibold">Irrigation Method: {formData.irrigation_method}</h3>
        <h3 className="font-semibold">Experience: {formData.experience} years</h3>
        <h3 className="font-semibold">Preferred Crops: {formData.preferred_crops}</h3>
        <h3 className="font-semibold">Seasonal Details: {formData.seasonal_details}</h3>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default Step5ReviewSubmit;
