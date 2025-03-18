'use client';

import { CSSProperties, PropsWithChildren, forwardRef, useEffect, useRef, useState } from 'react';
import { composeRefs } from '@radix-ui/react-compose-refs';
import { useKaKaoMapContext } from '@/contexts/KaKaoMapProvider';
import { MapContextProvider, useMapContext } from './context';
import { Position } from './types';

const 강남역 = {
  lat: 37.497952,
  lng: 127.027619,
};

export interface MapProps extends Omit<kakao.maps.MapOptions, 'center' | 'level'>, PropsWithChildren {
  /**
   * 지도 크기
   */
  size: number | { width: number | `${number}%`; height: number | `${number}%` };
  /**
   * 중심으로 설정할 위치
   * @default 강남역
   */
  center?: Position;
  /**
   * 확대 수준
   * @default 3
   */
  level?: number;
  style?: CSSProperties;
}
export const Map = forwardRef<HTMLDivElement, MapProps>((props, ref) => {
  const { size, center = 강남역, level = 3, style: styleFromProps, children, ...restOptions } = props;
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map>();
  const containerRef = useRef<HTMLDivElement>(null);
  const composedRefs = composeRefs(ref, containerRef);
  const { isLoaded } = useKaKaoMapContext();

  const width = typeof size === 'number' ? size : size.width;
  const height = typeof size === 'number' ? size : size.height;

  const style = {
    width,
    height,
    ...styleFromProps,
  };

  useEffect(() => {
    if (!isLoaded || containerRef.current == null) return;

    const map = new kakao.maps.Map(containerRef.current, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level,
      ...restOptions,
    });
    setMapInstance(map);
  }, [isLoaded]);

  return (
    <MapContextProvider map={mapInstance}>
      <div ref={composedRefs} style={style}>
        {children}
      </div>
    </MapContextProvider>
  );
});
