import { COLORS } from '@/styles/colors';
import { IconBaseProps } from './SVG/types';
import { X } from './SVG/X';
import { Distance } from './SVG/Distance';
import { CaretRight } from './SVG/CaretRight';
import { UploadSimpleIcon } from './SVG/UploadSimple';
import { ChevronLeft } from './SVG/ChevronLeft';
import { Lock } from './SVG/Lock';
import { EnvelopeOpen } from './SVG/EnvelopeOpen';
import { Map } from './SVG/Map';
import { Money } from './SVG/Money';
import { Note } from './SVG/Note';
import { PencilSimple } from './SVG/PencilSimple';
import { ThumbsUp } from './SVG/ThumbsUp';

const iconMap = {
  X: X,
  distance: Distance,
  caretRight: CaretRight,
  uploadSimple: UploadSimpleIcon,
  chevronLeft: ChevronLeft,
  lock: Lock,
  map: Map,
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
