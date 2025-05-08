import { http } from '@/apis/http';
import { useQuery } from '@tanstack/react-query';
import { create } from '@/utils/QS';

interface Params {
  name: string;
  latitude: string;
  longitude: string;
}

async function searchRestaurantCount({ name, latitude, longitude }: Params) {
  return http.get(`/v1/seoulRestaurants/search/count${create({ name, latitude, longitude })}`);
}

// 추천 가능 식당 조회
export function useGetSearchRestaurantCount({ name, latitude, longitude }: Params) {
  return useQuery({
    queryKey: ['searchRestaurant', name],
    queryFn: () => searchRestaurantCount({ name, latitude, longitude }),
  });
}
