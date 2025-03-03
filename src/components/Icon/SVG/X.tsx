import { IconBaseProps } from './types';

export const X = ({ size, color }: IconBaseProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 15L5 5" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};
