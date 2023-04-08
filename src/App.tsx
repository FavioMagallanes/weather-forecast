import {
  Button,
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
        <HomeTitle />
        <div className="flex justify-center items-center gap-6">
          <div>
            <Dropdown />
          </div>
          <div>
            <Button text="Obtener ubicación actual" />
          </div>
        </div>
        <div className="flex items-center mt-16 gap-12">
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
