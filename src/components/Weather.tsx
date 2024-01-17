import { useEffect, useState } from 'react';
import IWeatherData from '../models/IWeather';
import WeatherService from '../services/WeatherService';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const user = JSON.parse(localStorage.getItem('name') ?? 'null');
  console.log(user);
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log('lat' + latitude);
            console.log('lon' + longitude);

            const data = await WeatherService.getWeather(latitude, longitude);
            console.log(data);
            setWeatherData(data);
          },
          (error) => {
            console.error(error);
          }
        );
      } catch (error) {
        console.log('error' + error);
      }
    };
    fetchData();
  }, []);

  if (weatherData)
    return (
      <div>
        <h1>Hej {user}</h1>
        <WeatherCard weatherData={weatherData}></WeatherCard>
        <h3>Du behöver klä på dig: </h3>
      </div>
    );
};

export default Weather;
