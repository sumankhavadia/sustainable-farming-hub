# tips/serializers.py
from rest_framework import serializers
from .models import FarmingTip

class FarmingTipSerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmingTip
        fields = '__all__'
