import IWeatherData from '../models/IWeather';

type Props = {
  weatherData: IWeatherData;
};

const WeatherCard = ({ weatherData }: Props) => {
  return (
    <div>
      <h1>Väder i {weatherData.name}</h1>
      <h2>{weatherData.weather[0].main}</h2>
      <p>Temperatur: {Math.round(weatherData.main.temp)} °C</p>
    </div>
  );
};

export default WeatherCard;
