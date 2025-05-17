import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextResponse } from 'next/server';

export type GetNeedsTagsResponse = Array<{ id: number; text: string }>;

export const GET = async () => {
  try {
    const { data } = await http.get<GetNeedsTagsResponse>(`/v1/needsTags`);
    return NextResponse.json(data);
  } catch (error) {
    handleServerError(error);
  }
};
