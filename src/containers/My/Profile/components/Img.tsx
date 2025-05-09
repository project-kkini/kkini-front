import { ButtonHTMLAttributes, ImgHTMLAttributes } from 'react';

import { Icon } from '@/components/Icon/Icon';
import { COLORS } from '@/styles/colors';
import clsx from 'clsx';

export function Img({ className, ...restProps }: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={clsx('w-[100px] h-[100px] rounded-full border-[3px] border-orange-200 mx-auto', className)}
      {...restProps}
    />
  );
}

export function ImgEditButton({ className, ...restProps }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx('flex items-center justify-center rounded-full w-[32px] h-[32px] bg-orange-500', className)}
      {...restProps}>
      <Icon name="pencilSimple" color={COLORS.white} />
    </button>
  );
}
