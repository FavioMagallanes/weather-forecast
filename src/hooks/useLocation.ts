import { useState, useEffect } from 'react';

const useLocation = (): {
  latitude: number | null;
  longitude: number | null;
} => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    const getLocation = (): void => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          throw new Error(error.message);
        }
      );
    };

    getLocation();
  }, []);

  return { latitude, longitude };
};

export default useLocation;
