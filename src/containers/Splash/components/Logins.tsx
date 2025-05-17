'use client';

import { CSSProperties } from 'react';
import { SocialIconButton } from './SocialIconButton';
import { signIn } from 'next-auth/react';
import { Spacing } from '@/components/Spacing';
import { Text } from '@/components/Text/Text';
import { COLORS } from '@/styles/colors';

export function Logins() {
  return (
    <div style={loginsStyle}>
      <SocialIconButton socialType="kakao" onClick={() => signIn('kakao')} />
      <Spacing size={24} />
      <Text color={'#868B94'} variant="label-11">
        로그인 시 개인정보약관 및 위치기반서비스 이용약관에 동의합니다.
      </Text>
    </div>
  );
}

const loginsStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
