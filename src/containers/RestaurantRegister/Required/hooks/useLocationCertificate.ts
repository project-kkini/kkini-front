import { useEffect, useState } from 'react';

export function useLocationCertificate() {
  const [certificated, setCertificated] = useState<boolean>(false);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          console.debug(`위도: ${latitude}, 경도: ${longitude}, 정확도: ${accuracy}미터`);
          setCertificated(true);
        },
        (error) => {
          setCertificated(false);
        },
        {
          enableHighAccuracy: true, // 정확도 우선 모드
          timeout: 10000, // 10초 이내에 응답 없으면 에러 발생
          maximumAge: 0, // 항상 최신 위치 정보 수집
        },
      );
    } else {
      setCertificated(false);
    }
  }, []);

  return { certificated };
}
