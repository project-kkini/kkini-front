import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface Params {
  restaurantId: number;
  content: string;
  reviewImages: string[];
  priceTagIds: number[];
  needsTagIds: number[];
}

async function postCurrentRestaurant({ restaurantId, ...params }: Params) {
  return axios.post(`/api/restaurants/${restaurantId}/review`, params);
}

// 기존 끼니 식당에 리뷰 등록
export function usePostCurrentRestaurant() {
  return useMutation({
    mutationFn: postCurrentRestaurant,
  });
}
