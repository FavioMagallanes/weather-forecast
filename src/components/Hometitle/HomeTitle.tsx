import thunder from '../../assets/iconos/thunder.png';

const HomeTitle = (): JSX.Element => {
  return (
    <div className="flex gap-8 justify-center">
      <div className="gradient-text">
        <span className="text-white title text-8xl font-extrabold tracking-[-.06em] text-center ">
          Weather
        </span>
      </div>
      <div className="gradient-text">
        <span className="text-white title text-8xl font-extrabold tracking-[-.06em] text-center">
          Forecast
        </span>
      </div>
      <div className="rain">
        <div className="thunder">
          <img className="h-12 w-12" src={thunder} alt="thunder" />
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
