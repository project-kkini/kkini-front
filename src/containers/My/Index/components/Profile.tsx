import { Icon } from '@/components/Icon/Icon';
import { Text } from '@/components/Text/Text';
import { COLORS } from '@/styles/colors';

interface ProfileProps {
  name: string;
  imgSrc: string;
  subwayStationName: string;
}

export function Profile({ name, imgSrc, subwayStationName }: ProfileProps) {
  return (
    <div className="flex gap-[11px] items-center">
      <img
        className="w-[56px] h-[56px] rounded-full border-[2px] border-orange-200"
        src={imgSrc}
        alt={`${name}_프로필_이미지`}
      />
      <div className="flex flex-col gap-[6px]">
        <Text variant="subtitle-16" fontWeight="bold">
          {name}
        </Text>
        <div className="flex gap-[2px] items-center">
          <Icon name="map" color={COLORS.orange[500]} />
          <Text variant="caption-12" fontWeight="bold" color={COLORS.orange[500]}>
            {subwayStationName}역 직장인
          </Text>
        </div>
      </div>
    </div>
  );
}
