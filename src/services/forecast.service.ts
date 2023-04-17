import { type Forecast } from '../interfaces';

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
  const API_KEY = process.env.REACT_APP_API_KEY ?? '';
  const BASE_URL = process.env.REACT_APP_BASE_URL ?? '';
  const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=7&lang=es`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error al obtener el pronóstico');
  }
  const data = await response.json();
  return data as Forecast;
};

export const getForecastByCity = async ({ name }: City): Promise<Response> => {
  const API_KEY = process.env.REACT_APP_API_KEY ?? '';
  const BASE_URL = process.env.REACT_APP_BASE_URL ?? '';
  const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${name}&days=7&lang=es`;

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
