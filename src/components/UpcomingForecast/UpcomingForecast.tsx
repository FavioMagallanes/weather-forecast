import thunder from '../../assets/iconos/thunder.png';

const UpcomingForecast = (): JSX.Element => {
  return (
    <div className="bg-effect">
      <div className="flex w-60 flex-col items-center  rounded-3xl bg-gray-800 py-6 px-4 shadow-xl shadow-black">
        <p className="text-white font-bold -mb-3 text-lg">April 7</p>
        <div className="flex justify-center items-center gap-8 mt-1 mb-3 relative">
          <div className="mt-6">
            <p className="text-6xl text-orange-500 font-extrabold tracking-[-.06em] text-center">
              25°
            </p>
            <h2 className="text-orange-300 text-xs text-center font-bold">
              Feels like
            </h2>
          </div>
          <div className="mt-6 flex justify-center items-center absolute top-[-100px] -right-20">
            <img className="h-16 w-16 thunder" src={thunder} alt="thunder" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-1 font-roboto font-bold text-white text-sm">
            Tormentas
          </p>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center gap-4 mt-1">
              <div>
                <p className="text-lg text-orange-500 font-extrabold tracking-[-.06em] text-center">
                  25°
                </p>
                <h2 className="text-orange-300 text-sm font-bold text-center">
                  Max
                </h2>
              </div>
              <div>
                <span className="text-lg text-orange-500 font-extrabold tracking-[-.06em] text-center">
                  17°
                </span>
                <h2 className="text-orange-300 text-sm font-bold text-center">
                  Min
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <small className="text-slate-400 title text-xs font-bold text-center">
                Probalidad de precipitaciones: 10%
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingForecast;
