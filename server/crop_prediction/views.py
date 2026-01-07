# crop_prediction/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CropPredictionInputSerializer
import joblib
import numpy as np
import os
from pathlib import Path

# Get the base directory
BASE_DIR = Path(__file__).resolve().parent.parent

# Load the model and encoder using relative paths
model = joblib.load(os.path.join(BASE_DIR, 'ml', 'crop_predictor_model.pkl'))
encoder = joblib.load(os.path.join(BASE_DIR, 'ml', 'crop_encoder.pkl'))

@api_view(['POST'])
def predict_crop(request):
    serializer = CropPredictionInputSerializer(data=request.data)
    
    # Validate the input data
    if serializer.is_valid():
        # Extract features from the validated data
        data = serializer.validated_data
        features = np.array([[
            data['nitrogen'],
            data['phosphorus'],
            data['potassium'],
            data['temperature'],
            data['humidity'],
            data['ph'],
            data['rainfall']
        ]])

        # Make the prediction
        prediction = model.predict(features)
        predicted_crop = encoder.inverse_transform(prediction)

        return Response({'predicted_crop': predicted_crop[0]})
    else:
        return Response(serializer.errors, status=400)
