import axios from 'axios';
import IWeatherData from '../models/IWeather';

const Base_URL = `https://api.openweathermap.org/data/2.5/weather`;

const getWeather = async (latitude: number, longitude: number): Promise<IWeatherData> => {
  try {
    const response = await axios.get<IWeatherData>(
      `${Base_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export default { getWeather };
