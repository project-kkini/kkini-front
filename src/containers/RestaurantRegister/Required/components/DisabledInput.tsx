import { Icon } from '@/components/Icon/Icon';
import { Text } from '@/components/Text/Text';
import { CSSProperties } from 'react';

export function DisabledInput() {
  return (
    <div style={ContainerStyle}>
      <Icon name="lock" color="#868B94" />
      <Text variant="subtitle-16" color="#ADB1BA">
        위치 인증 후 맛집 검색이 가능해요
      </Text>
    </div>
  );
}

const ContainerStyle: CSSProperties = {
  height: 64,
  borderRadius: 12,
  backgroundColor: '#F2F3F6',
  border: 'none',
  margin: '0 20px',
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  width: 'calc(100% - 40px)',
  gap: 4,
};
