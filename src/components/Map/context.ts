import { buildContext } from '@toss/react';

interface MapContext {
  map: kakao.maps.Map | null;
}
export const [MapContextProvider, useMapContext] = buildContext<MapContext>('MapContext');
