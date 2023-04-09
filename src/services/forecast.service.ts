import { type Forecast } from '../interfaces/forecastResponse';

export interface City {
  name: string;
}

interface Response {
  data?: Forecast | undefined;
  error?: string | undefined;
}

export const getForecast = async (
  latitude: number,
  longitude: number
): Promise<Forecast> => {
  const apiKey = '2e204a24471f478281e45120230804';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=7&lang=es`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error al obtener el pronóstico');
  }

  const data = await response.json();
  return data as Forecast;
};

export const getForecastByCity = async ({ name }: City): Promise<Response> => {
  const apiKey = '2e204a24471f478281e45120230804';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${name}&days=7&lang=es`;

  const response = await fetch(url);
  if (!response.ok) {
    return {
      error: 'Error al obtener el pronóstico',
    };
  }

  const data = await response.json();
  return {
    data: data as Forecast,
  };
};
