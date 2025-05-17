import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface Params {
  restaurantId: number;
  content: string;
  reviewImages: string[];
  priceTagIds: number[];
  needsTagIds: number[];
}

async function postNewRestaurant({ restaurantId, ...params }: Params) {
  return axios.post(`/api/newRestaurants/${restaurantId}/review`, params);
}

// 새로운 끼니 식당에 리뷰 등록
export function usePostNewRestaurant({ onSuccess }: { onSuccess: () => void }) {
  return useMutation({
    mutationFn: postNewRestaurant,
    onSuccess,
  });
}
