import { http } from '@/apis/http';
import { useQuery } from '@tanstack/react-query';

interface GetNeedsTagsResponse {
  id: number;
  text: string;
}

async function getNeedsTags() {
  return http.get<any, Array<GetNeedsTagsResponse>>(`/api/v1/needsTags`);
}

// 태그 목록 조회
export function useGetNeedsTags() {
  return useQuery<Array<GetNeedsTagsResponse>>({
    queryKey: ['getNeedsTags'],
    queryFn: getNeedsTags,
  });
}
