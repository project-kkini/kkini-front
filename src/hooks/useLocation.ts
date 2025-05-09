import { useEffect, useState } from 'react';

export function useLocation() {
  const [location, setLocation] = useState({ latitude: 37.497952, longitude: 127.027619 });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return location;
}
