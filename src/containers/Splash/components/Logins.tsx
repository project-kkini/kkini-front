import { CSSProperties } from 'react';
import { SocialIconButton } from './SocialIconButton';

export function Logins() {
  return (
    <div style={loginsStyle}>
      <SocialIconButton socialType="kakao" />
    </div>
  );
}

const loginsStyle: CSSProperties = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
};
