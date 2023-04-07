import {
  CurrentForecastCard,
  Dropdown,
  Footer,
  HomeTitle,
  UpcomingForecast,
} from './components';

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center">
          <HomeTitle />
          <Dropdown />
        </div>
        <div className="flex items-center mt-16  gap-12">
          <div className="mb-36">
            <CurrentForecastCard />
          </div>
          <div className="flex flex-wrap">
            <UpcomingForecast />
            <UpcomingForecast />
            <UpcomingForecast />
            <UpcomingForecast />
            <UpcomingForecast />
            <UpcomingForecast />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
