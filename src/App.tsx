import { Dropdown } from './components/Dropdown';
import { Forecastcard } from './components/Forecastcard';
import { HomeTitle } from './components/Hometitle';

const App = (): JSX.Element => {
  return (
    <div>
      <HomeTitle />
      <div className="flex flex-col items-center mt-4 gap-12">
        <div className="mb-2">
          <Dropdown />
        </div>
        <div>
          <Forecastcard />
        </div>
      </div>
    </div>
  );
};

export default App;
