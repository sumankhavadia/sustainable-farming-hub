import pandas as pd
import numpy as np
import joblib

# Load model and encoder
model = joblib.load('crop_predictor_model.pkl')
encoder = joblib.load('crop_encoder.pkl')

# Define feature ranges (adjust based on your dataset's actual min/max)
def generate_random_sample():
    return {
        'N': np.random.randint(0, 140),
        'P': np.random.randint(5, 145),
        'K': np.random.randint(5, 205),
        'temperature': round(np.random.uniform(10, 40), 2),
        'humidity': round(np.random.uniform(10, 100), 2),
        'ph': round(np.random.uniform(4.5, 8.5), 2),
        'rainfall': round(np.random.uniform(20, 300), 2)
    }

# Create 10 random samples
samples = pd.DataFrame([generate_random_sample() for _ in range(10)])
print("Random Test Inputs:\n", samples)

# Predict using the model
predictions = model.predict(samples)
predicted_crops = encoder.inverse_transform(predictions)

# Show the results
print("\nPredicted Crops:")
for i, crop in enumerate(predicted_crops):
    print(f"Sample {i+1}: {crop}")
