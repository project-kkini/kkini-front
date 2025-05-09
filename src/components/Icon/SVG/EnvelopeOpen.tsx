import { IconBaseProps } from './types';

export const EnvelopeOpen = ({ size, color }: IconBaseProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 7.5V15.625C2.5 15.7908 2.56585 15.9497 2.68306 16.0669C2.80027 16.1842 2.95924 16.25 3.125 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V7.5L10 2.5L2.5 7.5Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.63651 11.875L2.69287 16.0734"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.307 16.0734L11.3633 11.875"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7.5L11.3637 11.875H8.63633L2.5 7.5"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
