import { formatDate, formatedTemp } from '../../utils';
import Spinner from '../Spinner/Spinner';
import { type Forecast } from '@/interfaces';

interface UpcomingForecastProps {
  forecast: Forecast | null;
}

const UpcomingForecast = ({ forecast }: UpcomingForecastProps): JSX.Element => {
  if (forecast === null) {
    return (
      <div className="flex justify-center items-center h-sceen">
        <Spinner />
      </div>
    );
  }

  const nextDays = forecast?.forecast.forecastday.slice(2, 7);

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
      {nextDays.map(day => (
        <div
          key={day.date}
          className="block rounded-xl px-8 py-4 shadow-lg shadow-black hover:border-gray-700 hover:ring-1 hover:ring-gray-700 focus:outline-none focus:ring"
        >
          <div className="flex flex-col items-center mb-2">
            <img
              className="h-14 w-14"
              src={day.day.condition.icon}
              alt="icon"
            />

            <h2 className="mt-2 font-bold text-white text-sm first-letter:uppercase">
              {formatDate(day.date)}
            </h2>

            <p className=" mt-2 text-xl  text-orange-500 font-extrabold tracking-[-.06em]">
              {formatedTemp(day.day.avgtemp_c)}°
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-300 text-sm font-bold">
              Max {formatedTemp(day.day.maxtemp_c)}°
            </p>
            <p className="text-orange-300 text-sm font-bold">
              Min {formatedTemp(day.day.mintemp_c)}°
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <small className="text-slate-400 title text-xs font-bold">
              Precipitaciones:
            </small>
            <small className="text-slate-400 title text-xs font-bold">
              {day.day.daily_chance_of_rain}%
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingForecast;
