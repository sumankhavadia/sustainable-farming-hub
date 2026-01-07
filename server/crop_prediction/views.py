# crop_prediction/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CropPredictionInputSerializer
import joblib
import numpy as np

# Load the model and encoder
model = joblib.load(r'C:\Users\Suman\sustainable-farming-hub\server\ml\crop_predictor_model.pkl')
encoder = joblib.load(r'C:\Users\Suman\sustainable-farming-hub\server\ml\crop_encoder.pkl')

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
