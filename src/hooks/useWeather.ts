import { useEffect, useState } from 'react';
import axios from 'axios';

type Response = Array<{
  id: string;
  Temperatura: string;
  Humedad: string;
  HumedadSuelo: string;
  EstadoSuelo: string;
  fecha_actual: string;
}>;

interface WeatherData {
  temperature: string;
  humidity: string;
  soilStatus: string;
  lastUpdateAt?: string;
}

const useWeather = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<WeatherData>({
    temperature: '',
    humidity: '',
    soilStatus: '',
  });

  const endpoint = 'https://mondotecnohuerta.000webhostapp.com/php/EspGet.php';

  const getWeatherData = async () => {
    try {
      const response = await axios.get<Response>(endpoint);

      const data: WeatherData = {
        temperature: response.data[0].Temperatura,
        humidity: response.data[0].Humedad,
        soilStatus: response.data[0].EstadoSuelo,
        lastUpdateAt: response.data[0].fecha_actual,
      };

      setData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return {
    loading,
    data,
  };
};

export default useWeather;
