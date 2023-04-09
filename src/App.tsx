import { Spinner } from 'flowbite-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import {
  Button,
  CurrentForecastCard,
  Dropdown,
  Footer,
  HomeTitle,
  UpcomingForecast,
} from './components';
import { defaultCities } from './constans/defaultCities';
import { useForecast, useLocation } from './hooks';
import { getForecastByCity } from './services/forecast.service';

const App = (): JSX.Element => {
  const { latitude, longitude } = useLocation();
  const { isLoading, forecast, fetchForecast, setForecast } = useForecast({
    latitude,
    longitude,
  });
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
      throw new Error('Error al obtener el pronóstico');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
    >
      <div className="h-screen flex flex-col items-center justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="container">
              <div>
                <HomeTitle />
              </div>
              {showMessage ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut', delay: 0.5 }}
                  className=" mt-6"
                >
                  <p className="text-slate-400 title text-3xl font-extrabold tracking-[-.06em] text-center">
                    La ubicación actual no está disponible. Por favor, permita
                    el acceso a la ubicación en su navegador.
                  </p>
                </motion.div>
              ) : (
                <div className="flex justify-center items-center gap-6">
                  <div>
                    <Dropdown
                      handleSelectCity={handleSelectCity}
                      options={defaultCities}
                    />
                  </div>
                  <div>
                    <Button
                      text="Obtener ubicación actual"
                      fetchForecast={fetchForecast}
                    />
                  </div>
                </div>
              )}

              {!showMessage && (
                <motion.div
                  className="flex items-center mt-16 gap-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut', delay: 0.9 }}
                >
                  <div className="mb-36">
                    <CurrentForecastCard
                      isLoading={isLoading}
                      forecast={forecast}
                    />
                  </div>
                  <div className="flex flex-wrap ml-8">
                    <UpcomingForecast
                      isLoading={isLoading}
                      forecast={forecast}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default App;
