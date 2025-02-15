import { SwitchCase } from '@/react-utils/SwitchCase';
import { ButtonHTMLAttributes, CSSProperties } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  socialType: 'kakao';
}

export function SocialIconButton({ socialType, ...props }: IconButtonProps) {
  return (
    <button style={buttonStyle} {...props}>
      <SwitchCase
        value={socialType}
        caseBy={{
          kakao: <KaKaoIcon />,
        }}
      />
    </button>
  );
}

const buttonStyle: CSSProperties = {
  width: '60px',
  height: '60px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  borderRadius: 999,
};

function KaKaoIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="30" fill="#FAE300" />
      <path
        d="M30.0002 17C32.5315 17 34.8726 17.4951 37.0237 18.4857C39.1749 19.4763 40.8753 20.8231 42.1252 22.5261C43.3752 24.2291 44.0004 26.087 44.0004 28.0994C44.0004 30.1118 43.3752 31.9723 42.1252 33.6805C40.8753 35.3891 39.1775 36.7385 37.0315 37.7287C34.8855 38.7193 32.5419 39.2144 30.0002 39.2144C29.198 39.2144 28.37 39.1568 27.5158 39.0413C23.8072 41.6302 21.8334 42.9402 21.594 42.9718C21.4795 43.0137 21.3701 43.0085 21.2659 42.9562C21.2242 42.9246 21.1931 42.8826 21.1721 42.8303C21.1514 42.7779 21.1407 42.7307 21.1407 42.6887V42.626C21.2031 42.217 21.6771 40.514 22.5624 37.5166C20.5521 36.5104 18.9555 35.1766 17.7735 33.5156C16.5912 31.8542 16 30.049 16 28.0994C16 26.1498 16.6252 24.2291 17.8751 22.5261C19.1251 20.8231 20.8259 19.4759 22.9766 18.4857C25.1278 17.4951 27.4688 17 30.0002 17Z"
        fill="#3C1E1E"
      />
    </svg>
  );
}
