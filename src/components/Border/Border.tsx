import { COLORS } from '@/styles/colors';
import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface BorderProps extends HTMLAttributes<HTMLHRElement> {
  color?: string;
}

export const Border = ({ className, color = COLORS.gray[200], style: styleFromProps, ...restProps }: BorderProps) => {
  const style = {
    '--kkini-border-color': color,
    ...styleFromProps,
  };

  return (
    <hr className={clsx(`w-full h-[1px] border-[var(--kkini-border-color)]`, className)} style={style} {...restProps} />
  );
};
