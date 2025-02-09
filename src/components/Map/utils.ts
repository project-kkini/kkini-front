import { Position } from './types';

/**
 * 주로 핀들의 중앙을 지도의 센터로 하고 싶을 때 사용할 수 있어요.
 */
export const getCenterPosition = (positions: Array<Position>) => {
  const totalPositions = positions.length;

  const totalLat = positions.reduce((sum, position) => sum + position.lat, 0);
  const totalLng = positions.reduce((sum, position) => sum + position.lng, 0);

  const centerLat = totalLat / totalPositions;
  const centerLng = totalLng / totalPositions;

  return { lat: centerLat, lng: centerLng };
};
