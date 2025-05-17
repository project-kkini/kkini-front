import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextResponse, NextRequest } from 'next/server';

export type GetPriceResponse = Array<{ id: number; text: string }>;

export const GET = async (_: NextRequest) => {
  try {
    const { data } = await http.get(`/v1/priceTags`);
    return NextResponse.json(data);
  } catch (error) {
    return handleServerError(error);
  }
};
