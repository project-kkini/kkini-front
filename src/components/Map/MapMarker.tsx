import { useEffect } from 'react';
import { useMapContext } from './context';
import { Position } from './types';

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
      ...(image != null
        ? {
            image: new kakao.maps.MarkerImage(
              image.src,
              new kakao.maps.Size(
                typeof image.size === 'number' ? image.size : image.size.width,
                typeof image.size === 'number' ? image.size : image.size.height,
              ),
              image.options,
            ),
          }
        : {}),
      ...restOptions,
    };
    new kakao.maps.Marker(options).setMap(map);
  }, [map]);
  return null;
};
