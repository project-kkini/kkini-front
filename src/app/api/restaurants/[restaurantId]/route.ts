import { handleServerError } from '@/apis/handleServerError';
import { http } from '@/apis/http';
import { NextRequest, NextResponse } from 'next/server';

export interface GetRestaurantsResponse {
  id: number;
  name: string;
  address: string;
  roadAddress: string;
  menuCategory: string;
  needsTags: Array<{ id: number; text: string }>;
  priceTags: Array<{ id: number; text: string }>;
  restaurantImageUrls: string[];
  myReview: {
    id: number;
    content: string;
    imageUrl: string[];
    createdAt: string;
  };
  reviews: Array<{ id: number; content: string; imageUrl: string[]; createdAt: string }>;
}

export const GET = async (_: NextRequest, { params }: { params: { restaurantId: number } }) => {
  try {
    const { data } = await http.get<GetRestaurantsResponse>(`/v1/restaurants/${params.restaurantId}`);
    return NextResponse.json(data);
  } catch (error) {
    handleServerError(error);
  }
};
