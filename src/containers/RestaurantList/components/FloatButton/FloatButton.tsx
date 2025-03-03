import { CSSProperties } from 'react';
import { PlusIcon } from '../Icons/PlusIcon';

export function FloatButton() {
  return (
    <button style={buttonStyle}>
      <PlusIcon />
    </button>
  );
}

const buttonStyle: CSSProperties = {
  padding: 14,
  borderRadius: 100,
  border: 'none',
  backgroundColor: '#FE6F0F',
  boxShadow: '0px 1px 8.4px 0px rgba(162, 164, 171, 0.25)',

  position: 'fixed',
  bottom: 65,
  right: 20,
};
