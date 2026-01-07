# weather/urls.py

from django.urls import path
from .views import WeatherView

urlpatterns = [
    path('api/weather/', WeatherView.as_view(), name='weather'),
]
