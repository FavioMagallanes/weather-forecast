import { formatDate, formatedTemp } from '../../utils';
import Spinner from '../Spinner/Spinner';
import { type Forecast } from '@/interfaces';

interface UpcomingForecastProps {
  isLoading: boolean;
  forecast: Forecast | null;
  className?: string;
}

const UpcomingForecast = ({ forecast }: UpcomingForecastProps): JSX.Element => {
  if (forecast === null) {
    return <Spinner />;
  }

  const nextDays = forecast?.forecast.forecastday.slice(2, 7);

  return (
    <div className="flex flex-wrap gap-12 ">
      {nextDays.map(day => (
        <div
          key={day.date}
          className="flex w-60 flex-col items-center  rounded-3xl bg-gray-800 py-6 px-4 shadow-xl shadow-black"
        >
          <p className="text-white font-bold -mb-3 text-lg">
            {formatDate(day.date)}
          </p>
          <div className="flex justify-center items-center gap-8 mt-1 mb-3 relative">
            <div className="mt-6">
              <p className="text-6xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
                {formatedTemp(day.day.avgtemp_c)}°
              </p>
            </div>
            <div className="mt-6 flex justify-center items-center absolute top-[-105px] -right-20">
              <img
                className="h-16 w-16 thunder"
                src={day.day.condition.icon}
                alt="icon"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-1 font-roboto font-bold text-white text-sm">
              {day.day.condition.text}
            </p>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center gap-4 mt-1">
                <div>
                  <p className="text-lg text-orange-500 font-extrabold tracking-[-.06em] text-center">
                    {formatedTemp(day.day.maxtemp_c)}°
                  </p>
                  <h2 className="text-orange-300 text-sm font-bold text-center">
                    Max
                  </h2>
                </div>
                <div>
                  <span className="text-lg text-orange-500 font-extrabold tracking-[-.06em] text-center">
                    {formatedTemp(day.day.mintemp_c)}°
                  </span>
                  <h2 className="text-orange-300 text-sm font-bold text-center">
                    Min
                  </h2>
                </div>
              </div>
              <div className="mt-4">
                <small className="text-slate-400 title text-xs font-bold text-center">
                  Probalidad de precipitaciones: {day.day.daily_chance_of_rain}%
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingForecast;
