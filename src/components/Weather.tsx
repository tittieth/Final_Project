import { useEffect, useState } from 'react';
import IWeatherData from '../models/IWeather';
import WeatherService from '../services/WeatherService';

const Weather = () => {
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
  return <div>Weather</div>;
};

export default Weather;
