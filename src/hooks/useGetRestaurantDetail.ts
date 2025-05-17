import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GetRestaurantsResponse } from '@/app/api/restaurants/[restaurantId]/route';

async function getRestaurantDetail({ restaurantId }: { restaurantId: number }) {
  return axios.get<GetRestaurantsResponse>(`/api/restaurants/${restaurantId}`);
}

// 식당 정보 상세 조회
export function useGetRestaurantDetail({ restaurantId }: { restaurantId: number }) {
  return useQuery({
    queryKey: ['restaurantDetail', restaurantId],
    queryFn: () => getRestaurantDetail({ restaurantId }),
  });
}
