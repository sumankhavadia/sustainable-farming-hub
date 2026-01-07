import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('access');
      try {
        const res = await axios.get('http://localhost:8000/api/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Your Profile</h2>
      <div><strong>Full Name:</strong> {profile.full_name}</div>
      <div><strong>Phone:</strong> {profile.phone}</div>
      <div><strong>Address:</strong> {profile.address}</div>
      <div><strong>District:</strong> {profile.district}</div>
      <div><strong>Pincode:</strong> {profile.pincode}</div>
      <div><strong>Country:</strong> {profile.country}</div>
      <div><strong>Latitude:</strong> {profile.latitude}</div>
      <div><strong>Longitude:</strong> {profile.longitude}</div>
      <div><strong>Farmer Type:</strong> {profile.farmer_type}</div>
      <div><strong>Farm Size:</strong> {profile.farm_size} acres</div>
      <div><strong>Soil Type:</strong> {profile.soil_type}</div>
      <div><strong>Irrigation Method:</strong> {profile.irrigation_method}</div>
      <div><strong>Experience:</strong> {profile.experience} years</div>
      <div><strong>Preferred Crops:</strong> {profile.preferred_crops}</div>
      <div><strong>Seasonal Details:</strong> {profile.seasonal_details}</div>
    </div>
  );
};

export default ProfileView;
