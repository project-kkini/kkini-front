import { ReactElement, ReactNode, cloneElement } from 'react';

interface WrapPrimitiveProps {
  children: ReactNode;
  wrapper: ReactElement;
}

/**
 * @description 자식 요소가 string 또는 number일 경우, 해당 요소를 wrapper로 랩핑해요.
 * 이 컴포넌트는 주로 서브 컴포넌트를 제공하지만, 개발자 경험(DX)을 향상시키기 위해 원시 타입의 데이터를 전달할 때도 자동으로 랩핑하여 렌더링할 수 있어 유용해요.
 */
export const WrapPrimitive = ({ children, wrapper }: WrapPrimitiveProps) => {
  if (typeof children === 'string' || typeof children === 'number') {
    return cloneElement(wrapper, {}, children);
  }
  return children;
};
