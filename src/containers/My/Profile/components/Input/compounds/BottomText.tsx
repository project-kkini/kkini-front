'use client';

import { Text, TextProps } from '@/components/Text/Text';

import clsx from 'clsx';
import { useInputContext } from '../context';

export function InputBottomText({ className, variant = 'body-14', ...restProps }: TextProps) {
  const { error } = useInputContext();

  return <Text className={clsx(error && 'text-red-50', className)} variant={variant} {...restProps} />;
}
