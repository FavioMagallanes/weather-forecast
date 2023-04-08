import { formatedTemp } from '../../utils/formatedTemp';
import Spinner from '../Spinner/Spinner';
import { type Forecast } from '@/interfaces/forecastResponse';

interface CurrentForecastCardProps {
  isLoading: boolean;
  forecast: Forecast | null;
}

const CurrentForecastCard = ({
  isLoading,
  forecast,
}: CurrentForecastCardProps): JSX.Element => {
  const CURRENT_DATE = new Date();
  return (
    <section className="mt-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-gray-800 rounded-3xl shadow-xl w-96 py-8 shadow-black">
          <div className="flex flex-col">
            <h2 className="text-white text-3xl mb-3 font-extrabold tracking-[-.06em] text-center">
              {CURRENT_DATE.toLocaleDateString('es-Es', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}{' '}
            </h2>
            <h2 className="text-orange-300 text-lg font-bold text-center">
              {forecast?.location.name}
            </h2>
          </div>

          <div className="flex justify-center items-center gap-8 relative">
            <div className="mt-6">
              <p className="text-8xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
                {formatedTemp(forecast?.current.temp_c ?? 0)}°
              </p>
              <h2 className="text-orange-300 text-lg font-bold text-center">
                Feels like
              </h2>
            </div>
            <div className="mt-6 flex items-center absolute top-[-180px] -right-5">
              <img
                className="thunder w-24 h-24"
                src={forecast?.current.condition.icon}
                alt="icon"
              />
            </div>
          </div>
          <div>
            <h2 className="text-white title text-3xl font-extrabold tracking-[-.06em] text-center mt-4 -mb-3">
              {forecast?.current.condition.text}
            </h2>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div>
              <span className="text-xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
                {forecast?.forecast.forecastday[0].day.maxtemp_c}°
              </span>
              <h2 className="text-orange-300 text-sm font-bold text-center">
                Max
              </h2>
            </div>
            <div>
              <span className="text-xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
                {forecast?.forecast.forecastday[0].day.mintemp_c}°
              </span>
              <h2 className="text-orange-300 text-sm font-bold text-center">
                Min
              </h2>
            </div>
          </div>
          <div className="flex flex-col">
            <hr className="border-0 h-px mt-4 bg-slate-700" />
            <div>
              <h2 className="text-white title text-lg font-extrabold tracking-[-.06em] text-center mt-3">
                Humedad del: {forecast?.current.humidity}%{' '}
              </h2>
            </div>
            <div>
              <h2 className="text-slate-400 title text-sm font-bold tracking-[-.06em] text-center mt-2">
                Viento de {forecast?.current.wind_kph} km/h
              </h2>
            </div>
            <div>
              <h2 className="text-slate-400 title text-sm font-bold tracking-[-.04em] text-center mt-2">
                Probalidad de precipitaciones: {forecast?.current.precip_in} %
              </h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CurrentForecastCard;
