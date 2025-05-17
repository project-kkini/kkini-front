'use client';

import { CSSProperties } from 'react';
import { Logins } from './components/Logins';
import { Spacing } from '@/components/Spacing';
import { Text } from '@/components/Text/Text';
import { Icon } from '@/components/Icon/Icon';
import { useRouter } from 'next/navigation';
import { Routes } from '@/routes';
import { ImageSection } from './components/ImageSection';

export function Splash() {
  const router = useRouter();

  return (
    <div style={containerStyle}>
      <Spacing size={20} />
      <header style={headerStyle}>
        <button style={aroundStyle} onClick={() => router.push(Routes.restaurantList)}>
          <Text variant="body-14">둘러보기</Text>
          <Icon name="caretRight" size={16} />
        </button>
      </header>
      <Spacing size={20} />
      <ImageSection />
      <Logins />
      <Spacing size={38} />
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
};

const headerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 20px',
};

const aroundStyle: CSSProperties = {
  display: 'flex',
  gap: 4,
  alignItems: 'center',
};
