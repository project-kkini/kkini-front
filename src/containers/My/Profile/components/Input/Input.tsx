'use client';

import { InputHTMLAttributes, ReactNode } from 'react';

import { WrapPrimitive } from '@/react-utils/WrapPrimitive';
import clsx from 'clsx';
import { InputBottomText } from './compounds/BottomText';
import { InputContextProvider } from './context';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
  error?: boolean;
  rightAddon?: ReactNode;
  bottomText?: ReactNode;
}

export function Input({
  className,
  type = 'text',
  active = false,
  error = false,
  readOnly = false,
  rightAddon,
  bottomText,
  ...restProps
}: InputProps) {
  return (
    <InputContextProvider active={active} error={error} readOnly={readOnly}>
      <div
        className={clsx(
          'flex items-center px-[12px] py-[15px] rounded-[8px]',
          // NOTE: border로 그릴 경우 레이아웃 시프팅이 있어 shadow로 그림
          {
            'bg-gray-50': readOnly, // readOnly 상태일 때만 배경
            'shadow-[inset_0_0_0_1px_#EF4452]': error, // error 상태: red border
            'shadow-[inset_0_0_0_1px_#d1d5db]': !error && !readOnly, // 기본 상태
          },
          className,
        )}>
        <input className="flex-1 bg-transparent outline-none" type={type} readOnly={readOnly} {...restProps} />
        {rightAddon}
      </div>
      {bottomText != null && (
        <div className="mt-[8px] flex items-center justify-end">
          <WrapPrimitive wrapper={<InputBottomText />}>{bottomText}</WrapPrimitive>
        </div>
      )}
    </InputContextProvider>
  );
}
