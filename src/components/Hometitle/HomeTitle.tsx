const HomeTitle = (): JSX.Element => {
  return (
    <div className="flex gap-2 lg:gap-6 md:gap-4 justify-center">
      <div>
        <span className="text-white title text-5xl font-extrabold tracking-[-.06em] text-center gradient-text md:text-6xl lg:text-8xl">
          Weather
        </span>
      </div>
      <div>
        <span className="text-white title text-5xl font-extrabold tracking-[-.06em] text-center gradient-text md:text-6xl lg:text-8xl">
          Forecast
        </span>
      </div>
    </div>
  );
};

export default HomeTitle;
