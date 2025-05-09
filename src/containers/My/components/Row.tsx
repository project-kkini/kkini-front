import { HTMLAttributes, ReactNode } from 'react';

import { COLORS } from '@/styles/colors';
import { Icon } from '@/components/Icon/Icon';
import clsx from 'clsx';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  rightAddon?: ReactNode;
  clickable?: boolean;
}

export function Row({
  className,
  children,
  rightAddon = <Icon name="caretRight" color={COLORS.gray[600]} />,
  clickable = true,
  ...restProps
}: RowProps) {
  return (
    <div className={clsx('flex items-center w-full', clickable ? 'cursor-pointer' : '', className)} {...restProps}>
      {children}
      {rightAddon != null && <div className="ml-auto">{rightAddon}</div>}
    </div>
  );
}
