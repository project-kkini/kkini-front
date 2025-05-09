import { http } from '@/apis/http';
import { create } from '@/utils/QS';
import { useQuery } from '@tanstack/react-query';

interface Params {
  menuCategoryIds: number[];
  priceTagIds: number[];
  needsTagIds: number[];
}

async function searchRestaurant({}: Params) {
  return http.get(`/v1/restaurants/search`);
}

export function useGetSearchRestaurant({ menuCategoryIds, priceTagIds, needsTagIds }: Params) {
  return useQuery({
    queryKey: ['searchRestaurant', menuCategoryIds, priceTagIds, needsTagIds],
    queryFn: () => searchRestaurant({ menuCategoryIds, priceTagIds, needsTagIds }),
  });
}
