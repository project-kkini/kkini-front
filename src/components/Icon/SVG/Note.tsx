import { IconBaseProps } from './types';

export const Note = ({ size, color }: IconBaseProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 7.5H12.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10H12.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 12.5H10" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.2411 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V3.75C3.125 3.58424 3.19085 3.42527 3.30806 3.30806C3.42527 3.19085 3.58424 3.125 3.75 3.125H16.25C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V12.2411C16.875 12.3232 16.8588 12.4045 16.8274 12.4803C16.796 12.5561 16.75 12.625 16.6919 12.6831L12.6831 16.6919C12.625 16.75 12.5561 16.796 12.4803 16.8274C12.4045 16.8588 12.3232 16.875 12.2411 16.875V16.875Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8184 12.498H12.5V16.8168"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
