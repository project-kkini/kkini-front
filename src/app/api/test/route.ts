import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextResponse } from 'next/server';

export const GET = async () => {
  console.log('호출?');
  try {
    const { data } = await http.get('/v1/restaurants/1');
    return NextResponse.json(data);
  } catch (error) {
    return handleServerError(error);
  }
};
