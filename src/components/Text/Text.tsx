import { ComponentProps, LiHTMLAttributes } from 'react';
import { textColorVar, textVariants } from './styles';

import { forwardRefWithAs } from '@/react-utils/forwardRefWithAs';
import { COLORS } from '@/styles/colors';
import { clsx } from 'clsx';

export type TextProps = ComponentProps<typeof Text>;
interface TextBaseProps {
  variant?:
    | 'title-24'
    | 'title-20'
    | 'title-18'
    | 'subtitle-16'
    | 'subtitle-14'
    | 'body-16px'
    | 'body-14px'
    | 'caption-13px'
    | 'caption-12px'
    | 'label-16px'
    | 'label-14px'
    | 'label-12px'
    | 'label-11px';
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
}

type AllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

export const Text = forwardRefWithAs<LiHTMLAttributes<HTMLSpanElement> & TextBaseProps, AllowedTags>((props, ref) => {
  const {
    className,
    as: Tag = 'span',
    variant = 'body-16px',
    fontWeight = 'regular',
    color = COLORS.gray[900],
    style: styleFromProps,
    ...restProps
  } = props;

  const style = {
    [textColorVar]: color,
    ...styleFromProps,
  };

  return (
    <Tag
      ref={ref}
      className={clsx(className, textVariants({ className, variant, fontWeight }), `text-[var(${textColorVar})]`)}
      style={style}
      {...restProps}
    />
  );
});
