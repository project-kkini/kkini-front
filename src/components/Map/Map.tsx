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
  size: number | { width: number; height: number };
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

interface MapMarkerProps extends Omit<kakao.maps.MarkerOptions, 'position'> {
  position: Position;
  image?: {
    src: string;
    size: number | { width: number; height: number };
    options?: kakao.maps.MarkerImageOptions;
  };
}
export const MapMarker = (props: MapMarkerProps) => {
  const { position, image, ...restOptions } = props;
  const { map } = useMapContext();

  useEffect(() => {
    if (map == null) return;

    const options: kakao.maps.MarkerOptions = {
      position: new kakao.maps.LatLng(position.lat, position.lng),
      ...(image != null && {
        image: new kakao.maps.MarkerImage(
          image.src,
          new kakao.maps.Size(
            typeof image.size === 'number' ? image.size : image.size.width,
            typeof image.size === 'number' ? image.size : image.size.height,
          ),
          image.options,
        ),
      }),
      ...restOptions,
    };
    new kakao.maps.Marker(options).setMap(map);
  }, [map]);
  return null;
};
