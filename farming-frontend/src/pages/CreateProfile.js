import React from 'react';
import MultiStepForm from '../components/ProfileForm/MultiStepForm';  // Import your MultiStepForm

const CreateProfile = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Create Your Profile</h2>
      <MultiStepForm />  {/* Rendering the MultiStepForm */}
    </div>
  );
};

export default CreateProfile;