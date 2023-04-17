import { motion } from 'framer-motion';

import { formatedTemp } from '../../utils';
import Spinner from '../Spinner/Spinner';
import { type Forecast } from '@/interfaces';

interface CurrentForecastCardProps {
  forecast: Forecast | null;
}

const CurrentForecastCard = ({
  forecast,
}: CurrentForecastCardProps): JSX.Element => {
  if (forecast === null) {
    return (
      <div className="flex justify-center items-center h-sceen">
        <Spinner />
      </div>
    );
  }
  const CURRENT_DATE = new Date();
  return (
    <section>
      <div className="block rounded-xl py-4 shadow-lg shadow-black hover:border-gray-700 hover:ring-1 hover:ring-gray-700 focus:outline-none focus:ring">
        <div className="flex flex-col items-center gap-3 mb-2">
          <img
            className="w-18 h-18 md:w-24 md:h-24"
            src={forecast?.forecast.forecastday[0].day.condition.icon}
            alt="icon"
          />

          <h2 className="text-white text-3xl mb-3 font-extrabold tracking-[-.06em] text-center first-letter:uppercase">
            {CURRENT_DATE.toLocaleDateString('es-Es', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}{' '}
          </h2>
          <h2 className="text-orange-300 text-lg md:text-2xl font-bold text-center">
            {forecast?.location.name}
          </h2>
          <motion.p
            className="text-6xl md:text-8xl text-orange-500 font-extrabold tracking-[-.06em] text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            {formatedTemp(forecast?.current.temp_c ?? 0)}°
          </motion.p>
          <p className="text-white title text-2xl md:text-3xl font-extrabold tracking-[-.06em] text-center mt-1 -mb-3">
            {forecast?.current.condition.text}
          </p>
        </div>
        <div className="flex justify-center mt-8 gap-4">
          <div>
            <p className="text-sm md:text-lg text-slate-400 font-bold text-center">
              Temperatura máxima
            </p>
            <p className="text-xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
              {forecast?.forecast.forecastday[0].day.maxtemp_c}°
            </p>
          </div>
          <div>
            <p className="text-sm md:text-lg text-slate-400 font-bold text-center">
              Temperatura mínima
            </p>
            <p className="text-xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
              {forecast?.forecast.forecastday[0].day.mintemp_c}°
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div>
            <p className="text-white title text-base font-bold tracking-[-.06em] text-center mt-3">
              Humedad: {forecast?.current.humidity}%{' '}
            </p>
          </div>
          <div>
            <p className="text-white title text-base font-bold tracking-[-.06em] text-center mt-2">
              Viento: {forecast?.current.wind_kph} km/h
            </p>
          </div>
        </div>
        <div className="mb-4 mt-3">
          <p className="text-slate-400 title text-sm font-bold tracking-[-.04em] text-center mt-2">
            Probalidad de precipitaciones: {forecast?.current.precip_in}%{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentForecastCard;
