# crop_prediction/urls.py

from django.urls import path
from .views import predict_crop

urlpatterns = [
    path('predict-crop/', predict_crop, name='predict_crop'),
]
