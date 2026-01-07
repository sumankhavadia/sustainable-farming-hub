import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThermometerSun, Droplets, Wind, CloudSun } from "lucide-react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const city = "Mumbai"; // You can make this dynamic based on user

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee2859a31fe27d4c79d1a93ce036e7a1&units=metric`
        );
        setWeather(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p className="p-6 text-xl">Loading weather data...</p>;

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">🌤️ Weather Forecast - {city}</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{weather.weather[0].main}</h2>
          <CloudSun className="text-yellow-400 w-10 h-10" />
        </div>
        <div className="text-5xl font-extrabold mb-2">
          {weather.main.temp}°C
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Feels like {weather.main.feels_like}°C
        </p>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <Droplets className="mx-auto text-blue-500" />
            <p className="text-lg">{weather.main.humidity}%</p>
            <p className="text-xs">Humidity</p>
          </div>
          <div>
            <Wind className="mx-auto text-gray-500" />
            <p className="text-lg">{weather.wind.speed} m/s</p>
            <p className="text-xs">Wind</p>
          </div>
          <div>
            <ThermometerSun className="mx-auto text-red-500" />
            <p className="text-lg">{weather.main.temp_max}° / {weather.main.temp_min}°</p>
            <p className="text-xs">Max / Min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
