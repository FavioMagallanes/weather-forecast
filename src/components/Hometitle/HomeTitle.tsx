const HomeTitle = (): JSX.Element => {
  return (
    <div className="flex gap-8 justify-center mt-6">
      <div className="gradient-text">
        <span className="text-white title text-8xl font-extrabold tracking-[-.06em] text-center">
          Weather
        </span>
      </div>
      <div className="gradient-text">
        <span className="text-white title text-8xl font-extrabold tracking-[-.06em] text-center">
          Forecast
        </span>
      </div>
    </div>
  );
};

export default HomeTitle;
