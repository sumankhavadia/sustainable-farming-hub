# models.py

from django.db import models
from django.contrib.auth.models import User

FARMER_TYPE_CHOICES = [
    ('crop', 'Crop Farmer'),
    ('livestock', 'Livestock Farmer'),
    ('mixed', 'Mixed Farming'),
    ('organic', 'Organic/Sustainable'),
]

SOIL_TYPE_CHOICES = [
    ('sandy', 'Sandy'),
    ('clay', 'Clay'),
    ('silt', 'Silt'),
    ('peat', 'Peat'),
    ('chalk', 'Chalk'),
    ('loam', 'Loam'),
]

IRRIGATION_CHOICES = [
    ('drip', 'Drip'),
    ('sprinkler', 'Sprinkler'),
    ('surface', 'Surface'),
    ('manual', 'Manual'),
]

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    full_name = models.CharField(max_length=100, blank=True, null=True)
    phone = models.CharField(max_length=20)
    address = models.TextField()
    district = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)
    country = models.CharField(max_length=50)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    farmer_type = models.CharField(max_length=20, choices=FARMER_TYPE_CHOICES)
    farm_size = models.DecimalField(max_digits=10, decimal_places=2, help_text="In acres")
    soil_type = models.CharField(max_length=20, choices=SOIL_TYPE_CHOICES)
    irrigation_method = models.CharField(max_length=20, choices=IRRIGATION_CHOICES)
    experience = models.PositiveIntegerField(help_text="Years of experience")
    preferred_crops = models.CharField(max_length=255, help_text="Comma-separated list")
    seasonal_details = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username} Profile"
