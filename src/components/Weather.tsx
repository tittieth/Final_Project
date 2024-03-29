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
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const data = await WeatherService.getWeather(latitude, longitude);
            setWeatherData(data);
            setTemperature(Math.round(data.main.temp));
            setWeatherCondition(data.weather[0].main.toLowerCase());
          } catch (error) {
            setErrorMsg(
              'Oops! Vi kunde tyvärr inte hämta aktuell väderinformation just nu. Det kan bero på tillfälliga tekniska problem. Vänligen försök igen senare. Om problemet kvarstår, kontrollera din internetanslutning eller så kan det vara ett tillfälligt fel med vår tjänsteleverantör. Vi ber om ursäkt för eventuella besvär.'
            );
          }
        },
        (error) => {
          console.error(error);
          setErrorMsg(
            'Oops! Det verkar som att vi behöver tillgång till din plats för att ge dig den bästa upplevelsen. För att fortsätta, snälla tillåt platsåtkomst i din webbläsare. Klicka på det lilla hänglåset bredvid webbadressen och välj "Tillåt platsåtkomst". Observera: På mobila enheter kan det vara nödvändigt att också aktivera platstjänsten på själva enheten. Gå till inställningar -> integritet -> plats och se till att platstjänsten är aktiverad för den här webbplatsen.'
          );
        }
      );
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

  const getRecommendedClothesByCategory = (category: string): IClothingItem[] => {
    return getRecommendedClothes().filter((item) => item.category === category);
  };

  const handleClothesChange = (checked: boolean) => {
    setCheckedClothes((prevCheckedClothes) => (checked ? prevCheckedClothes + 1 : prevCheckedClothes - 1));
  };

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
          {/* Klädesplagg */}
          <div className="clothes-wrapper">
            <div className="clothing-cards-wrapper">
              {getRecommendedClothesByCategory('clothes').map((item: IClothingItem) => (
                <ClothingDisplay
                  key={item.id}
                  clothingItem={item}
                  onClothesChange={handleClothesChange}
                ></ClothingDisplay>
              ))}
            </div>

            {/* Skor */}
            <div className="shoes-cards-wrapper">
              {getRecommendedClothesByCategory('shoes').map((item: IClothingItem) => (
                <ClothingDisplay
                  key={item.id}
                  clothingItem={item}
                  onClothesChange={handleClothesChange}
                ></ClothingDisplay>
              ))}
            </div>

            {/* Accessoarer */}
            <div className="accessories-cards-wrapper">
              {getRecommendedClothesByCategory('accessories').map((item: IClothingItem) => (
                <ClothingDisplay
                  key={item.id}
                  clothingItem={item}
                  onClothesChange={handleClothesChange}
                ></ClothingDisplay>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default Weather;
