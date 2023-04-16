import { useState, useEffect } from 'react';

import {
  HomeTitle,
  UpcomingForecast,
  Spinner,
  CurrentForecastCard,
  Dropdown,
  Button,
  Footer,
} from './components';
import { defaultCities } from './constans';
import { useForecast, useLocation } from './hooks';
import { getForecastByCity } from './services';

const App = (): JSX.Element => {
  const { latitude, longitude } = useLocation();
  const { isLoading, forecast, fetchForecast, setForecast } = useForecast({
    latitude,
    longitude,
  });
  const [hasError, setHasError] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(true);

  useEffect(() => {
    setShowMessage(latitude === null || longitude === null);
  }, [latitude, longitude]);

  const handleSelectCity = async (cityName: string): Promise<void> => {
    try {
      const { data } = await getForecastByCity({ name: cityName });
      if (data != null) {
        await new Promise<void>(resolve => {
          setForecast(data);
          resolve();
        });
      }
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="">
          <>
            {showMessage ? (
              <div className="flex justify-center items-center h-screen">
                <p className="text-slate-500 title text-3xl font-extrabold tracking-[-.06em] text-center">
                  La ubicación actual no está disponible. <br /> Por favor,
                  permita el acceso a la ubicación en su navegador.
                </p>
              </div>
            ) : (
              <>
                {hasError ? (
                  <div className="flex justify-center items-center h-screen">
                    <p className="text-red-500 title text-3xl font-extrabold tracking-[-.06em] text-center">
                      Se ha producido un error al cargar el pronóstico.
                    </p>
                  </div>
                ) : (
                  <>
                    <HomeTitle />
                    <div className="flex justify-center">
                      <Button
                        text="Ubicación actual"
                        fetchForecast={fetchForecast}
                      />
                      <Dropdown
                        handleSelectCity={handleSelectCity}
                        options={defaultCities}
                      />
                    </div>
                    <section className="grid place-items-center place-content-center">
                      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                          <CurrentForecastCard forecast={forecast} />
                          <UpcomingForecast forecast={forecast} />
                        </div>
                      </div>
                    </section>
                    <Footer />
                  </>
                )}
              </>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default App;
