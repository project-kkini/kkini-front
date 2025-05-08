import { http } from '@/apis/http';
import { useMutation } from '@tanstack/react-query';

interface Params {
  restaurantId: number;
  content: string;
  reviewImages: string[];
  priceTagIds: number[];
  needsTagIds: number[];
}

async function postNewRestaurant({ restaurantId, ...params }: Params) {
  return http.post(`/api/v1/newRestaurants/${restaurantId}/review`, params);
}

// 새로운 끼니 식당에 리뷰 등록
export function usePostNewRestaurant() {
  return useMutation({
    mutationFn: postNewRestaurant,
  });
}
