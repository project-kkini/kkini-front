import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GetRestaurantsResponse } from '@/app/api/restaurants/[restaurantId]/route';

async function getRestaurantDetail({ restaurantId }: { restaurantId: number }) {
  const response = await axios.get<GetRestaurantsResponse>(`/api/restaurants/${restaurantId}`);
  return response.data;
}

// 식당 정보 상세 조회
export function useGetRestaurantDetail({ restaurantId }: { restaurantId: number }) {
  return useQuery({
    queryKey: ['restaurantDetail', restaurantId],
    queryFn: () => getRestaurantDetail({ restaurantId }),
  });
}
