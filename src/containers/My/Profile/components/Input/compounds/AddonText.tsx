'use client';

import { Text, TextProps } from '@/components/Text/Text';

import clsx from 'clsx';
import { useInputContext } from '../context';

export function InputAddonText({ className, variant = 'body-14', fontWeight = 'bold', ...restProps }: TextProps) {
  const { readOnly, active, error } = useInputContext();

  return (
    <Text
      className={clsx(readOnly || error ? 'text-gray-600' : '', active ? 'text-green-100' : '', className)}
      variant={variant}
      fontWeight={fontWeight}
      {...restProps}
    />
  );
}
