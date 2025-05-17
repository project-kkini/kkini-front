import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Params {
  menuCategoryIds: number[];
  priceTagIds: number[];
  needsTagIds: number[];
}

async function searchRestaurant({}: Params) {
  return axios.get(`/api/restaurants/search`);
}

export function useGetSearchRestaurant({ menuCategoryIds, priceTagIds, needsTagIds }: Params) {
  return useQuery({
    queryKey: ['searchRestaurant', menuCategoryIds, priceTagIds, needsTagIds],
    queryFn: () => searchRestaurant({ menuCategoryIds, priceTagIds, needsTagIds }),
  });
}
