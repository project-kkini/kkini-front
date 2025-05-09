import { Icon, IconName } from '@/components/Icon/Icon';

import { COLORS } from '@/styles/colors';
import { Text } from '@/components/Text/Text';

interface RestaurantInfoItemProps {
  icon: IconName;
  text: string;
}

export function RestaurantInfoItem({ icon, text }: RestaurantInfoItemProps) {
  return (
    <div className="flex items-center gap-[4px]">
      <Icon name={icon} size={16} color={COLORS.gray[600]} />
      <Text variant="caption-13">{text}</Text>
    </div>
  );
}
