const HomeTitle = (): JSX.Element => {
  return (
    <div className="flex gap-8 justify-center mt-6">
      <div>
        <span className="text-white title text-8xl font-extrabold tracking-[-.06em] text-center gradient-text">
          Weather
        </span>
      </div>
      <div>
        <span className="text-white title text-8xl font-extrabold tracking-[-.06em] text-center gradient-text">
          Forecast
        </span>
      </div>
    </div>
  );
};

export default HomeTitle;
