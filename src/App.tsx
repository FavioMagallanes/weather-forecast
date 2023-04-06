import { Dropdown } from './components/Dropdown';
import { HomeTitle } from './components/Hometitle';

const App = (): JSX.Element => {
  return (
    <div>
      <HomeTitle />
      <div className="flex flex-col items-center mt-16 gap-16">
        <div className="mb-16">
          <Dropdown />
        </div>
        <div>
          <p>card</p>
        </div>
      </div>
    </div>
  );
};

export default App;
