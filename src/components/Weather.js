import React, { useState, useEffect } from 'react';
import sunny from '../SVG/sunny.svg';
import cloudy from '../SVG/cloudy.svg';
import rainy from '../SVG/rainy.svg';
import snowy from '../SVG/snowy.svg';
import stormy from '../SVG/stormy.svg';
import drizzly from '../SVG/drizzly.svg';

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState({
    weather: '',
    temp: '',
    tempMin: '',
    tempMax: '',
    humidity: '',
    wind: '',
    name: '',
  });

  const fetchData = async (location) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=18ec97b4b8f4ea158ceb60cf1056119b`);
      const data = await response.json();

      setCurrentWeather({
        weather: data.weather[0].main,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        name: data.name,
      });
    } catch(error) {
      console.error(error);
    };
  };

  // select weather icon based on weather conditions
  const weatherIcon = () => {
    switch (currentWeather.weather) {
      case 'Thunderstorm':
        return stormy;
      case 'Drizzle':
        return drizzly;
      case 'Rain':
        return rainy;
      case 'Snow':
        return snowy;
      case 'Clouds':
        return cloudy;
      case 'Clear':
        return sunny;
      default:
        return sunny;
    }
  }

  // fetch weather data for Auckland when component mounts
  useEffect(() => {
    fetchData('Auckland');
  }, []);

  useEffect(() => {
    console.log(currentWeather)
  }, [currentWeather]);

  return (
    <div className="current-weather-wrapper">
      <h2>{currentWeather.name}</h2>
      <p>{Math.round(currentWeather.temp * 10) / 10}&deg;C</p>
      <p>Wind: {currentWeather.wind} knots</p>
      <img src={weatherIcon()} alt="Weather Icon" width="50" height="50" />
    </div>
  );
};

export default Weather;