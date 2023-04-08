import { createContext, useState, useEffect } from 'react';

interface LocationContextType {
  latitude: number | null;
  longitude: number | null;
}

interface LocationProviderProps {
  children: React.ReactNode;
}

export const LocationContext = createContext<LocationContextType>({
  latitude: null,
  longitude: null,
});

export const LocationProvider = ({
  children,
}: LocationProviderProps): JSX.Element => {
  const [location, setLocation] = useState<LocationContextType>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    // eslint-disable-next-line
    if (navigator.geolocation?.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          throw new Error('No se pudo obtener la ubicación');
        }
      );
    } else {
      throw new Error(
        'El navegador no es compatible con la API de Geolocalización'
      );
    }
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
};
