import { create } from '@/utils/QS';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Params {
  name: string;
  latitude: number;
  longitude: number;
}

async function searchRestaurantCount({ name, latitude, longitude }: Params) {
  return axios.get(`/api/seoulRestaurants/search/count${create({ name, latitude, longitude })}`);
}

// 추천 가능 식당 조회
export function useGetSearchRestaurantCount({ name, latitude, longitude }: Params) {
  return useQuery({
    queryKey: ['searchRestaurantCount', name],
    queryFn: () => searchRestaurantCount({ name, latitude, longitude }),
  });
}
