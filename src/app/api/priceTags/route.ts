import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextResponse } from 'next/server';

export type GetPriceResponse = Array<{ id: number; text: string }>;

export const GET = async () => {
  try {
    const { data } = await http.get<GetPriceResponse>(`/v1/priceTags`);
    return NextResponse.json(data);
  } catch (error) {
    handleServerError(error);
  }
};
