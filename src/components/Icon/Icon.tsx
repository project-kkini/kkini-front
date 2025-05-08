import { COLORS } from '@/styles/colors';
import { CaretRight } from './SVG/CaretRight';
import { ChevronLeft } from './SVG/ChevronLeft';
import { Distance } from './SVG/Distance';
import { EnvelopeOpen } from './SVG/EnvelopeOpen';
import { Map } from './SVG/Map';
import { Money } from './SVG/Money';
import { Note } from './SVG/Note';
import { PencilSimple } from './SVG/PencilSimple';
import { ThumbsUp } from './SVG/ThumbsUp';
import { UploadSimpleIcon } from './SVG/UploadSimple';
import { X } from './SVG/X';
import { IconBaseProps } from './SVG/types';

const iconMap = {
  X: X,
  distance: Distance,
  uploadSimple: UploadSimpleIcon,
  chevronLeft: ChevronLeft,
  map: Map,
  caretRight: CaretRight,
  thumbsUp: ThumbsUp,
  note: Note,
  envelopeOpen: EnvelopeOpen,
  money: Money,
  pencilSimple: PencilSimple,
};

export type IconName = keyof typeof iconMap;
export interface IconProps extends IconBaseProps {
  /**
   * 아이콘 이름을 설정해요. iconMap에 정의된 이름을 사용해야 해요.
   */
  name: IconName;
}

export const Icon = ({ name, size = 24, color = COLORS.gray[900] }: IconProps) => {
  const Component = iconMap[name];
  return <Component size={size} color={color} />;
};
