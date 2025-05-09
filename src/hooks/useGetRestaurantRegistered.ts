import { http } from '@/apis/http';
import { useQuery } from '@tanstack/react-query';

async function getRestaurantRegistered({ restaurantId }: { restaurantId: number }) {
  return http.get<boolean>(`/v1/restaurants/${restaurantId}/registered`);
}

// 끼니에 등록된 식당인지 여부
export function useGetRestaurantRegistered({ restaurantId }: { restaurantId: number }) {
  return useQuery({
    queryKey: ['restaurantRegistered', restaurantId],
    queryFn: () => getRestaurantRegistered({ restaurantId }),
  });
}
