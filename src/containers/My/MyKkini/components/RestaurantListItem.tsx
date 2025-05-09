import { COLORS } from '@/styles/colors';
import { RestaurantInfoItem } from './RestaurantInfoItem';
import { Text } from '@/components/Text/Text';

interface RestaurantListItemProps {
  restaurantImageUrls: string;
  name: string;
  menuCategory: string;
  priceTags: string[];
  location: string;
}

export function RestaurantListItem({ restaurantImageUrls, name, menuCategory }: RestaurantListItemProps) {
  return (
    <li className="flex gap-[12px] py-[12px]">
      <img src={restaurantImageUrls} alt={`${name}_이미지`} className="w-[90px] h-[90px] rounded-[8px]" />

      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center gap-[7px] ">
          <Text variant="subtitle-16" fontWeight="bold">
            {name}
          </Text>
          <Text variant="subtitle-14" color={COLORS.gray[600]}>
            {menuCategory}
          </Text>
        </div>
        <div className="flex flex-col gap-[4px]">
          <RestaurantInfoItem icon="money" text="1~2만원대" />
          <RestaurantInfoItem icon="map" text="회사로부터 100m" />
        </div>
      </div>
    </li>
  );
}
