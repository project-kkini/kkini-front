import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GetNeedsTagsResponse } from '@/app/api/neeedsTags/route';

async function getNeedsTags() {
  const response = await axios.get<GetNeedsTagsResponse>('/api/needsTags');
  return response.data;
}

// 태그 목록 조회
export function useGetNeedsTags() {
  return useQuery({
    queryKey: ['getNeedsTags'],
    queryFn: getNeedsTags,
  });
}
