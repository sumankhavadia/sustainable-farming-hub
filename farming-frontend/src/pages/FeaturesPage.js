// FeaturesPage.js
import React from 'react';

const features = [
  {
    title: "Crop Prediction",
    description: "Get accurate crop suggestions based on soil and weather conditions using machine learning.",
  },
  {
    title: "Smart Farm Insights",
    description: "Live data dashboard showing real-time weather, soil health, and crop conditions.",
  },
  {
    title: "Farming Tips",
    description: "Daily farming tips to help you improve productivity and sustainability.",
  },
  {
    title: "Weather Forecast",
    description: "Detailed weather insights to help plan your farming activities efficiently.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Our Features</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-green-700">{feature.title}</h2>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
