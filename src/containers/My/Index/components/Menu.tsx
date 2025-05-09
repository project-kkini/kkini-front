import { Icon, IconProps } from '@/components/Icon/Icon';

import { COLORS } from '@/styles/colors';
import { Text } from '@/components/Text/Text';

interface MenuProps {
  iconName: IconProps['name'];
  title: string;
}

export function Menu({ iconName, title }: MenuProps) {
  return (
    <div className="flex items-center gap-[8px]">
      <Icon name={iconName} size={20} color={COLORS.gray[600]} />
      <Text variant="subtitle-14">{title}</Text>
    </div>
  );
}
