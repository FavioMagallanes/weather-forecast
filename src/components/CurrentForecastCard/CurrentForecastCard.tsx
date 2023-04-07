import thunder from '../../assets/iconos/thunder.png';

const CurrentForecastCard = (): JSX.Element => {
  return (
    <div className="bg-effect">
      <div className="bg-gray-800 rounded-3xl shadow-xl w-96 py-8 shadow-black">
        <div>
          <h2 className="text-white text-4xl font-extrabold tracking-[-.06em] text-center">
            April 6, 16:56
          </h2>
        </div>

        <div className="flex justify-center items-center gap-8 mt-4 relative">
          <div className="mt-6">
            <p className="text-8xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
              25°
            </p>
            <h2 className="text-orange-300 text-lg font-bold text-center">
              Feels like
            </h2>
          </div>
          <div className="mt-6 flex justify-center items-center absolute top-[-160px] -right-10">
            <img className="h-24 w-24 thunder" src={thunder} alt="thunder" />
          </div>
        </div>
        <div>
          <h2 className="text-white title text-4xl font-extrabold tracking-[-.06em] text-center mt-6 -mb-3">
            Tormentas
          </h2>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div>
            <span className="text-xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
              25°
            </span>
            <h2 className="text-orange-300 text-sm font-bold text-center">
              Max
            </h2>
          </div>
          <div>
            <span className="text-xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
              17°
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
              Humedad del: 80%
            </h2>
          </div>
          <div>
            <h2 className="text-slate-400 title text-sm font-bold tracking-[-.06em] text-center mt-2">
              Viento de 10 km/h
            </h2>
          </div>
          <div>
            <h2 className="text-slate-400 title text-sm font-bold tracking-[-.04em] text-center mt-2">
              Probalidad de precipitaciones: 10%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecastCard;
