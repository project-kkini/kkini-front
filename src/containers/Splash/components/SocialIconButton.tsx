import { Text } from '@/components/Text/Text';
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
          kakao: <KaKao />,
        }}
      />
    </button>
  );
}

const buttonStyle: CSSProperties = {
  width: 'calc(100% - 40px)',
  height: 52,
  backgroundColor: '#FAE300',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  margin: '0 20px',
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'center',
};

function KaKao() {
  return (
    <div style={textStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
        <path
          opacity="0.902"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.5 0.5C4.79 0.5 0.5 4.31088 0.5 7.53493C0.5 9.9507 2.058 12.0816 4.431 13.3479L3.433 17.038C3.344 17.3651 3.713 17.6248 3.996 17.4366L8.373 14.5125C8.742 14.5487 9.118 14.5699 9.5 14.5699C14.47 14.5699 18.5 11.4203 18.5 7.53493C18.5 4.31088 14.47 0.5 9.5 0.5Z"
          fill="black"
        />
      </svg>
      <Text color="#212124" variant="body-16" fontWeight="bold">
        카카오로 로그인
      </Text>
    </div>
  );
}

const textStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
};
