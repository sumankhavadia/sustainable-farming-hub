import requests
from rest_framework.response import Response
from rest_framework.views import APIView

# Replace with your actual OpenWeather API key
OPENWEATHER_API_KEY = "ee2859a31fe27d4c79d1a93ce036e7a1"

class WeatherView(APIView):
    def get(self, request):
        city = request.query_params.get('city', 'Mumbai')  # Default to 'Mumbai'
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={OPENWEATHER_API_KEY}&units=metric"

        try:
            res = requests.get(url)
            data = res.json()

            # If there's an error (like city not found or invalid API key)
            if data.get("cod") != 200:
                return Response({"error": data.get("message", "Failed to fetch weather data")}, status=400)

            # Format the weather data
            weather_data = {
                "city": data["name"],
                "temperature": data["main"]["temp"],
                "humidity": data["main"]["humidity"],
                "weather": data["weather"][0]["description"],
                "icon": data["weather"][0]["icon"]
            }

            return Response(weather_data)

        except Exception as e:
            return Response({"error": "Could not fetch weather data"}, status=500)
