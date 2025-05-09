import { http } from '@/apis/http';
import { useQuery } from '@tanstack/react-query';

interface Response {
  id: number;
  name: string;
  address: string;
  roadAddress: string;
  menuCategory: string;
  needsTags: Array<{ id: number; text: string }>;
  priceTags: Array<{ id: number; text: string }>;
  restaurantImageUrls: string[];
  myReview: {
    id: number;
    content: string;
    imageUrl: string[];
    createdAt: string;
  };
  reviews: Array<{ id: number; content: string; imageUrl: string[]; createdAt: string }>;
}

async function getRestaurantDetail({ restaurantId }: { restaurantId: number }) {
  return http.get<any, Response>(`/v1/restaurants/${restaurantId}/registered`);
}

// 식당 정보 상세 조회
export function useGetRestaurantDetail({ restaurantId }: { restaurantId: number }) {
  return useQuery<Response>({
    queryKey: ['restaurantDetail', restaurantId],
    queryFn: () => getRestaurantDetail({ restaurantId }),
  });
}
