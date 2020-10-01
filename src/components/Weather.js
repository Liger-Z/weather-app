import React, { useState } from 'react';

const Weather = () => {
  const [current, setCurrent] = useState({});

  const fetchCurrent = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&appid=18ec97b4b8f4ea158ceb60cf1056119b');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <div></div>
  );
};

export default Weather;