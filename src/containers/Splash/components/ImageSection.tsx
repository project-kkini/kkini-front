import { Spacing } from '@/components/Spacing';
import { Text } from '@/components/Text/Text';
import { CSSProperties, useState } from 'react';

export function ImageSection() {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div style={containerStyle}>
      <div style={dotWrapperStyle}>
        <div style={{ backgroundColor: imgIndex === 0 ? '#FE6611' : '#D9D9D9', ...dotStyle }} />
        <div style={{ backgroundColor: imgIndex === 1 ? '#FE6611' : '#D9D9D9', ...dotStyle }} />
      </div>
      <Spacing size={16} />
      <Text variant="title-24" fontWeight="bold">
        강남 직장인들은
        <br />
        점심시간에 뭘 먹을까
      </Text>
      <Spacing size={24} />
    </div>
  );
}

const containerStyle: CSSProperties = {
  padding: '0 20px',
  flex: 1,
};

const dotWrapperStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
};

const dotStyle: CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: 4,
};

const imgStyle: CSSProperties = {};
