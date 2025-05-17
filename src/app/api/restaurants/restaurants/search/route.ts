import { NextRequest, NextResponse } from 'next/server';

import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get('name');
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  const params = {
    name,
    latitude,
    longitude,
  };

  try {
    const { data } = await http.get('/v1/restaurants/search', { params });
    return NextResponse.json(data);
  } catch (error) {
    return handleServerError(error);
  }
};
