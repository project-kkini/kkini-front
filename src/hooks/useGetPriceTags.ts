import { http } from '@/apis/http';
import { GetPriceResponse } from '@/app/api/priceTags/route';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getPriceTags() {
  const response = await axios.get<GetPriceResponse>(`/api/priceTags`);
  return response.data;
}

// 가격태그 목록 조회
export function useGetPriceTags() {
  return useQuery({
    queryKey: ['getPriceTags'],
    queryFn: getPriceTags,
  });
}
