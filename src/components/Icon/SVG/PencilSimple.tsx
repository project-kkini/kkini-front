import { IconBaseProps } from './types';

export const PencilSimple = ({ size, color }: IconBaseProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.125 16.8739H4.375C4.20924 16.8739 4.05027 16.8081 3.93306 16.6909C3.81585 16.5737 3.75 16.4147 3.75 16.2489V12.7578C3.75 12.6757 3.76617 12.5945 3.79758 12.5186C3.82898 12.4428 3.87502 12.3739 3.93306 12.3159L13.3081 2.94087C13.4253 2.82366 13.5842 2.75781 13.75 2.75781C13.9158 2.75781 14.0747 2.82366 14.1919 2.94087L17.6831 6.43199C17.8003 6.5492 17.8661 6.70817 17.8661 6.87393C17.8661 7.03969 17.8003 7.19866 17.6831 7.31587L8.125 16.8739Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.25 5L15.625 9.375" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
