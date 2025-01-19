'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Spacing } from '../../components/Spacing';
import { DropdownContainer } from './components/DropdownContainer';
import { DUMMY_LIST } from '../dummy';
import { DropdownItem } from './components/DropdownItem';

export function RestaurantRegister() {
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState<string>();

  return (
    <>
      {focused ? null : (
        <>
          <Spacing size={12} />
          <div style={TitleStyle}>{`??역 직장인\n닉네임님의 추천 맛집은..`}</div>
          <Spacing size={8} />
          <div style={SubtitleStyle}>인증된 역 Nm이내의 식당만 추천할 수 있어요</div>
        </>
      )}
      <Spacing size={76} />
      <div style={TextFieldContainerStyle}>
        <input
          value={name}
          style={TextFieldStyle}
          placeholder="추천하는 식당을 검색해주세요"
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocused(true)}
        />
        {focused ? (
          <DropdownContainer>
            {DUMMY_LIST.map((item, index) => (
              <DropdownItem
                key={index}
                {...item}
                onClick={() => {
                  setFocused(false);
                  setName(item.title);
                }}
              />
            ))}
          </DropdownContainer>
        ) : null}
      </div>
    </>
  );
}

const TitleStyle: CSSProperties = {
  margin: '0 20px',
  fontSize: 24,
  fontWeight: 700,
  whiteSpace: 'pre',
  lineHeight: '32.4px',
};

const SubtitleStyle: CSSProperties = {
  margin: '0 20px',
  fontSize: 14,
  color: '#868B94',
  lineHeight: '19.6px',
};

const TextFieldContainerStyle: CSSProperties = {
  position: 'relative',
};

const TextFieldStyle: CSSProperties = {
  fontSize: 16,
  display: 'block',
  padding: '20px',
  borderRadius: 12,
  backgroundColor: '#F2F3F6',
  border: 'none',
  margin: '0 20px',
  width: 'calc(100% - 80px)',
  outline: 'none',
};
