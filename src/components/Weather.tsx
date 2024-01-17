import { useEffect, useState } from 'react';
import IWeatherData from '../models/IWeather';
import WeatherService from '../services/WeatherService';
import WeatherCard from './WeatherCard';
import IClothingItem from '../models/IClothing';
import clothesData from '../data/Clothes';
import ClothingDisplay from './ClothingDisplay';

const Weather = () => {
  const user = JSON.parse(localStorage.getItem('name') ?? 'null');
  console.log(user);
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [temperature, setTemperature] = useState<number>(0);
  const [weatherCondition, setWeatherCondition] = useState<string>('');

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
            setTemperature(Math.round(data.main.temp));
            setWeatherCondition(data.weather[0].main.toLowerCase());
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

  const getRecommendedClothes = (): IClothingItem[] => {
    const recommendedClothes = clothesData.filter((item: IClothingItem) => {
      const conditionMatch =
        typeof item.weatherCondition === 'string'
          ? item.weatherCondition === weatherCondition
          : item.weatherCondition.includes(weatherCondition);

      const temperatureMatch = item.temperature === undefined || item.temperature(temperature);

      return conditionMatch && temperatureMatch;
    });

    return recommendedClothes;
  };

  if (weatherData)
    return (
      <>
        <div>
          <h1>Hej {user}</h1>
          <WeatherCard weatherData={weatherData}></WeatherCard>
          <h3>Du behöver klä på dig: </h3>
          <div className="wrapper">
            {getRecommendedClothes().map((item: IClothingItem) => (
              <ClothingDisplay key={item.id} clothingItem={item}></ClothingDisplay>
            ))}
          </div>
        </div>
      </>
    );
};

export default Weather;
