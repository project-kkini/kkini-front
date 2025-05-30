import { IconBaseProps } from './types';

export function UploadSimpleIcon({ size, color = 'white' }: IconBaseProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.0625 7.68457L12 3.74707L15.9375 7.68457"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M12 14.25V3.75" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M21 12.75V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V12.75"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
