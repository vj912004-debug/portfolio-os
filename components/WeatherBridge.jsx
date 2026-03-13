'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherBridge = ({ isBento = false }) => {
  const [weather, setWeather] = useState({ temp: '--', condition: 'SYNCING' });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using Dunedin, NZ as the default for your Otago studies
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Dunedin,nz&units=metric&appid=895284fb2d2c1d9a30d2482451f93006`);
        setWeather({ 
          temp: Math.round(res.data.main.temp), 
          condition: res.data.weather[0].main 
        });
      } catch (e) {
        setWeather({ temp: '14', condition: 'OFFLINE' });
      }
    };
    fetchWeather();
  }, []);

  // Style: If in Bento, it's a regular div. If global, it's fixed top-left.
  const containerStyle = isBento ? {} : {
    position: 'fixed',
    top: '100px',
    left: '40px',
    zIndex: 50,
  };

  return (
    <div style={containerStyle}>
      <div className="weather-pill" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '8px 16px',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          background: '#00f2ff',
          borderRadius: '50%',
          boxShadow: '0 0 10px #00f2ff'
        }}></span>
        <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '1px' }}>
          OTAGO_NZ: {weather.temp}°C // {weather.condition.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default WeatherBridge;