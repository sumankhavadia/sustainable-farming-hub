from django.contrib import admin
from django.urls import path,include
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Sustainable Farming Hub!")

urlpatterns = [
     path('admin/', admin.site.urls),
     path('api/', include('accounts.urls')), 
     path('', home),  # This adds a homepage route
     path('weather/', include('weather.urls')),
     path('feature/', include('crop_prediction.urls')),  
     path('tips/', include('farming_tips.urls')),# Add this line
     
]
