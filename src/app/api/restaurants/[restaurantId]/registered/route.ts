import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextRequest, NextResponse } from 'next/server';

export type GetRestaurantRegisteredResponse = boolean;

export const GET = async (_: NextRequest, { params }: { params: { restaurantId: number } }) => {
  try {
    const { data } = await http.get<boolean>(`/v1/restaurants/${params.restaurantId}/registered`);
    return NextResponse.json(data);
  } catch (error) {
    return handleServerError(error);
  }
};
