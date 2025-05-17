import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextRequest, NextResponse } from 'next/server';

export type GetNeedsTagsResponse = Array<{ id: number; text: string }>;

export const GET = async (_: NextRequest) => {
  try {
    const { data } = await http.get(`/v1/needsTags`);
    return NextResponse.json(data);
  } catch (error) {
    return handleServerError(error);
  }
};
