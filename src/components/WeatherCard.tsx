import IWeatherData from '../models/IWeather';

type Props = {
  weatherData: IWeatherData;
};

const WeatherCard = ({ weatherData }: Props) => {
  const user = JSON.parse(localStorage.getItem('name') ?? 'null');
  console.log(user);

  const customIconMappings: Record<string, string> = {
    Snow: 'snow.png',
    Clear: 'clear-sky.png',
    Clouds: 'scattered-clouds.png',
    Rain: 'rain.png',
    Thunderstorm: 'thunderstorm.png',
  };

  const customIcon = customIconMappings[weatherData.weather[0].main];

  return (
    <div>
      <h1>Hej {user}</h1>
      <h1>Väder i {weatherData.name}</h1>
      <h2>{weatherData.weather[0].main}</h2>
      <img
        src={`/public/weather-icons/${customIcon}`}
        alt={weatherData.weather[0].description}
        height={50}
        width={50}
      />
      <img
        src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        alt={weatherData.weather[0].description}
      />
      <p>Temperatur: {Math.round(weatherData.main.temp)} °C</p>
    </div>
  );
};

export default WeatherCard;
