import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState({
    "coord": {
      "lon": 0,
      "lat": 0
    },
    "weather": [],
    "base": "",
    "main": {
      "temp": '',
      "feels_like": '',
      "temp_min": '',
      "temp_max": '',
      "pressure": '',
      "humidity": ''
    },
    "visibility": 0,
    "wind": {
      "speed": 0,
      "deg": 0
    },
    "clouds": {
      "all": 0
    },
    "dt": 0,
    "sys": {
      "type": 0,
      "id": 0,
      "message": 0,
      "country": "",
      "sunrise": 0,
      "sunset": 0
    },
    "timezone": 0,
    "id": 0,
    "name": "",
    "cod": 200
    } );

  const fetchData = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=18ec97b4b8f4ea158ceb60cf1056119b`);
      const data = await response.json();
      setCurrentWeather(data);
    } catch(error) {
      console.error(error);
    };
  };

  // fetch weather data for Auckland when component mounts
  useEffect(() => {
    fetchData('New York');
  }, []);

  useEffect(() => {
    console.log(currentWeather)
  }, [currentWeather]);

  return (
    <div>
      <h2>{currentWeather.name}</h2>
      <p>{currentWeather.main.temp}&deg;C</p>
      <p>Wind: {currentWeather.wind.speed} knots</p>
    </div>
  );
};

export default Weather;