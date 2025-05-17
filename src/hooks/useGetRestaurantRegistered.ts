import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getRestaurantRegistered({ restaurantId }: { restaurantId: number }) {
  const response = await axios.get<boolean>(`/api/restaurants/${restaurantId}/registered`);
  return response.data;
}

// 끼니에 등록된 식당인지 여부
export function useGetRestaurantRegistered({ restaurantId }: { restaurantId: number }) {
  return useQuery({
    queryKey: ['restaurantRegistered', restaurantId],
    queryFn: () => getRestaurantRegistered({ restaurantId }),
  });
}
