import { ComponentProps, LiHTMLAttributes } from 'react';

import { forwardRefWithAs } from '@/react-utils/forwardRefWithAs';

export type TextProps = ComponentProps<typeof Text>;

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

export const Text = forwardRefWithAs<LiHTMLAttributes<HTMLSpanElement>, AllowedTags>((props, ref) => {
  const { as: Tag = 'span', ...restProps } = props;
  return <Tag ref={ref} {...restProps} />;
});
