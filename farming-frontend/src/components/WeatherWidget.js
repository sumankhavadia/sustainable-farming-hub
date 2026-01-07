import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/weather/api/weather/?city=${city}`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Could not fetch weather data");
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]); // Fetch data whenever the city changes

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="weather-widget">
      <h2>Weather in {weatherData.city}</h2>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt={weatherData.weather}
        />
        <p>{weatherData.weather}</p>
        <p>{weatherData.temperature}°C</p>
        <p>Humidity: {weatherData.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
