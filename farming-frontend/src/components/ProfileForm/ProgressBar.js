import React from 'react';

const ProgressBar = ({ currentStep }) => {
  const progress = (currentStep - 1) * 25;
  
  return (
    <div className="mb-6">
      <div className="bg-gray-300 w-full h-2 rounded-full">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-center mt-2">
        Step {currentStep} of 5
      </div>
    </div>
  );
};

export default ProgressBar;
