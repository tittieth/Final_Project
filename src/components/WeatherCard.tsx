import IWeatherData from '../models/IWeather';

type Props = {
  weatherData: IWeatherData;
};

const WeatherCard = ({ weatherData }: Props) => {
  const customIconMappings: Record<string, string> = {
    Snow: 'snow.png',
    Clear: 'clear-sky.png',
    Clouds: 'scattered-clouds.png',
    Rain: 'rain.png',
    Thunderstorm: 'thunderstorm.png',
  };

  const customIcon = customIconMappings[weatherData.weather[0].main];

  return (
    <div className="card-wrapper">
      <h2>Vädret i {weatherData.name}:</h2>
      {/* <h3>{weatherData.weather[0].main}</h3> */}
      <img
        className="weather-icon"
        src={`/weather-icons/${customIcon}`}
        alt={weatherData.weather[0].description}
        height={60}
        width={60}
        loading="lazy"
      />
      <p>{Math.round(weatherData.main.temp)} °C</p>
    </div>
  );
};

export default WeatherCard;
