# tips/urls.py
from django.urls import path
from .views import daily_tip

urlpatterns = [
    path('farming-tips/', daily_tip),
]
