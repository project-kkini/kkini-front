import { http } from '@/apis/http';
import { useQuery } from '@tanstack/react-query';

interface GetPriceResponse {
  id: number;
  text: string;
}

async function getPriceTags() {
  return http.get<any, Array<GetPriceResponse>>(`/api/v1/priceTags`);
}

// 가격태그 목록 조회
export function useGetPriceTags() {
  return useQuery<Array<GetPriceResponse>>({
    queryKey: ['getPriceTags'],
    queryFn: getPriceTags,
  });
}
