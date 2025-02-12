import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export const handleServerError = (error: unknown) => {
  if (isAxiosError(error)) {
    return NextResponse.json(
      {
        data: error.response?.data,
      },
      { status: error.response?.status },
    );
  }
  return NextResponse.json({ message: '알 수 없는 오류 발생' }, { status: 500 });
};

// AxiosError 타입 가드 함수
const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError)?.isAxiosError === true;
};
