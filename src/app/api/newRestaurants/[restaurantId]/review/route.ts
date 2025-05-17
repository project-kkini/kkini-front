import { NextRequest, NextResponse } from 'next/server';

import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';

interface Params {
  restaurantId: string;
}

export const POST = async (request: NextRequest, { params }: { params: Params }) => {
  const { body } = request;
  const { restaurantId } = params;

  try {
    const { data } = await http.post(`/v1/newRestaurants/${restaurantId}/reviews`, body);
    return NextResponse.json(data);
  } catch (error) {
    return handleServerError(error);
  }
};
