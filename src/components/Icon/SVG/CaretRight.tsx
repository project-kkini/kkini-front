import { IconBaseProps } from './types';

export function CaretRight({ size, color }: IconBaseProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
