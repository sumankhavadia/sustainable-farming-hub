# crop_prediction/serializers.py

from rest_framework import serializers

class CropPredictionInputSerializer(serializers.Serializer):
    nitrogen = serializers.FloatField()
    phosphorus = serializers.FloatField()
    potassium = serializers.FloatField()
    temperature = serializers.FloatField()
    humidity = serializers.FloatField()
    ph = serializers.FloatField()
    rainfall = serializers.FloatField()
