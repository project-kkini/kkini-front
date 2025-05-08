import { IconBaseProps } from './types';

export const Map = ({ size, color }: IconBaseProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.75C12 21.75 19.5 16.5 19.5 9.75C19.5 7.76088 18.7098 5.85322 17.3033 4.4467C15.8968 3.04018 13.9891 2.25 12 2.25C10.0109 2.25 8.10322 3.04018 6.6967 4.4467C5.29018 5.85322 4.5 7.76088 4.5 9.75C4.5 16.5 12 21.75 12 21.75ZM15 9.75C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75C9 8.09315 10.3431 6.75 12 6.75C13.6569 6.75 15 8.09315 15 9.75Z"
        fill={color}
      />
    </svg>
  );
};
