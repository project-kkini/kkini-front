import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    variant: {
      'title-24': 'text-[24px]/[135%]',
      'title-20': 'text-[20px]/[140%]',
      'title-18': 'text-[18px]/[135%]',

      'subtitle-16': 'text-[16px]/[135%]',
      'subtitle-14': 'text-[14px]/[140%]',

      'body-16': 'text-[16px]/[150%]',
      'body-14': 'text-[14px]/[155%]',

      'caption-13': 'text-[13px]/[150%]',
      'caption-12': 'text-[12px]/[135%]',

      'label-16': 'text-[16px]/[135%]',
      'label-14': 'text-[14px]/[140%]',
      'label-12': 'text-[12px]/[135%]',
      'label-11': 'text-[11px]/[130%]',
    },
    fontWeight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
});
