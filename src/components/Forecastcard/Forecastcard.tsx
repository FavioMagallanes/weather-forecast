import thunder from '../../assets/iconos/thunder.png';

const Forecastcard = (): JSX.Element => {
  return (
    <div className="bg-effect">
      <div className="bg-gray-800 rounded-lg shadow-xl w-96 max-w-xs p-6 shadow-black">
        <div>
          <h2 className="text-white title text-2xl font-extrabold tracking-[-.06em] text-center">
            Hoy
          </h2>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <img className="h-28 w-28" src={thunder} alt="thunder" />
        </div>
        <div>
          <h2 className="text-orange-500 title text-5xl font-extrabold tracking-[-.06em] text-center mt-6">
            25° C
          </h2>
        </div>
        <div>
          <h2 className="text-white title text-2xl font-extrabold tracking-[-.06em] text-center mt-6">
            Humedad 80%
          </h2>
        </div>
        <div className="flex items-center justify-evenly">
          <div>
            <h2 className="text-gray-600 title text-lg font-bold tracking-[-.06em] text-center mt-6">
              Viento 10km/h
            </h2>
          </div>
          <div>
            <h2 className="text-gray-600 title text-lg font-bold tracking-[-.06em] text-center mt-6">
              Lluvia 10%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecastcard;
