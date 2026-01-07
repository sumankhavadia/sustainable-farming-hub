from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    # Show the user's email (from related User model) as read-only
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = UserProfile
        fields = [
            'id',
            'email',              # Read-only, from user
            'full_name',
            'phone',
            'address',
            'district',
            'pincode',
            'country',
            'latitude',
            'longitude',
            'farmer_type',
            'farm_size',
            'soil_type',
            'irrigation_method',
            'experience',
            'preferred_crops',
            'seasonal_details',
        ]
        # We’ll set the user in the view, so we don’t include it in read-only or fields


