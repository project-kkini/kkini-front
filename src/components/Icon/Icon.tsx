import { COLORS } from '@/styles/colors';
import { IconBaseProps } from './SVG/types';
import { X } from './SVG/X';

const iconMap = {
  X: X,
};

export interface IconProps extends IconBaseProps {
  name: keyof typeof iconMap;
}

export const Icon = ({ name, size = 24, color = COLORS.gray[900] }: IconProps) => {
  const Component = iconMap[name];
  return <Component size={size} color={color} />;
};
