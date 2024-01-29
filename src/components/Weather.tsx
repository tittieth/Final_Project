import { useEffect, useState } from 'react';
import IWeatherData from '../models/IWeather';
import WeatherService from '../services/WeatherService';
import WeatherCard from './WeatherCard';
import IClothingItem from '../models/IClothing';
import clothesData from '../data/Clothes';
import ClothingDisplay from './ClothingDisplay';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const Weather = () => {
  const userFromLs = JSON.parse(localStorage.getItem('name') ?? 'null');
  const user = userFromLs ? userFromLs.charAt(0).toUpperCase() + userFromLs.slice(1) : null;

  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number>(0);
  const [weatherCondition, setWeatherCondition] = useState<string>('');
  const [checkedClothes, setCheckedClothes] = useState<number>(0);
  const [totalClothes, setTotalClothes] = useState<number>(0);
  const navigate = useNavigate();

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
            setErrorMsg(
              'Oops! Det verkar som att vi behöver tillgång till din plats för att ge dig den bästa upplevelsen. För att fortsätta, snälla tillåt platsåtkomst i din webbläsare. Klicka på det lilla hänglåset bredvid webbadressen och välj "Tillåt platsåtkomst". Tack!'
            );
          }
        );
      } catch (error) {
        console.log('error' + error);
        setErrorMsg(
          'Oops! Vi kunde tyvärr inte hämta aktuell väderinformation just nu. Det kan bero på tillfälliga tekniska problem. Vänligen försök igen senare. Om problemet kvarstår, kontrollera din internetanslutning eller så kan det vara ett tillfälligt fel med vårt tjänsteleverantör. Vi ber om ursäkt för eventuella besvär.'
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTotalClothes(getRecommendedClothes().length);
  }, [weatherCondition, temperature]);

  const getRecommendedClothes = (): IClothingItem[] => {
    const recommendedClothes = clothesData.filter((item: IClothingItem) => {
      const conditionMatch =
        typeof item.weatherCondition === 'string'
          ? item.weatherCondition === weatherCondition
          : item.weatherCondition.includes(weatherCondition);

      const temperatureMatch = item.temperature !== undefined && item.temperature(temperature);

      return conditionMatch && temperatureMatch;
    });

    return recommendedClothes;
  };

  const handleClothesChange = (checked: boolean) => {
    setCheckedClothes((prevCheckedClothes) => (checked ? prevCheckedClothes + 1 : prevCheckedClothes));
  };
  console.log(checkedClothes + 'from handleclothes');
  console.log(totalClothes + 'from handleclothes');

  useEffect(() => {
    if (checkedClothes > 0 && checkedClothes === totalClothes) {
      navigate('/goodjob');
    }
  }, [checkedClothes, totalClothes]);

  if (errorMsg) {
    return (
      <div className="error-message">
        <p>{errorMsg}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="loadingspinner-wrapper">
        <p>Använder mina superkrafter för att hämta vädret...</p>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (weatherData)
    return (
      <>
        <div className="wrapper">
          <h1>Hej {user}!</h1>
          <WeatherCard weatherData={weatherData}></WeatherCard>
          <h3>Du behöver klä på dig:</h3>
          <div className="clothing-cards-wrapper">
            {getRecommendedClothes().map((item: IClothingItem) => (
              <ClothingDisplay
                key={item.id}
                clothingItem={item}
                onClothesChange={handleClothesChange}
              ></ClothingDisplay>
            ))}
          </div>
        </div>
      </>
    );
};

export default Weather;
