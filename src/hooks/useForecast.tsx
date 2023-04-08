import { useState, useEffect } from 'react';

import { type Forecast } from '../interfaces/forecastResponse';
import { getForecast } from '../services/forecast.service';

interface UseForecastProps {
  latitude: number | null;
  longitude: number | null;
}

const useForecast = ({
  latitude,
  longitude,
}: UseForecastProps): {
  isLoading: boolean;
  forecast: Forecast | null;
  fetchForecast: () => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState<Forecast | null>(null);

  const fetchForecast = async (): Promise<void> => {
    if (latitude != null && longitude != null) {
      try {
        setIsLoading(true);
        const forecastData = await getForecast(latitude, longitude);
        setForecast(forecastData);
        setIsLoading(false);
      } catch (error) {
        throw new Error('Error al obtener el pronóstico');
      }
    }
  };

  useEffect(() => {
    let isMounted = true; // variable para evitar la actualización después de que el componente haya sido desmontado
    if (latitude != null && longitude != null) {
      setIsLoading(true);
      getForecast(latitude, longitude)
        .then(forecastData => {
          if (isMounted) {
            // verificar si el componente está montado antes de actualizar el estado
            setForecast(forecastData);
            setIsLoading(false);
          }
        })
        .catch(error => {
          throw new Error(error.message);
        });
    }
    return () => {
      isMounted = false; // actualizar el valor de la variable para evitar actualizar el estado después de que el componente haya sido desmontado
    };
  }, [latitude, longitude]);

  return { isLoading, forecast, fetchForecast };
};

export default useForecast;
