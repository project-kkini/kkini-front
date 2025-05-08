import { RestaurantListItem } from './components/RestaurantListItem';

export function MyKkiniPage() {
  return (
    <div className="flex flex-col pt-[12px]">
      <RestaurantListItem
        restaurantImageUrls="https://placehold.co/90x90"
        name="미도인 강남"
        menuCategory="양식"
        // @TODO: 응답 형식 확인하고 수정 필요.
        priceTags={['1~2만원대']}
        location="회사로부터 100m"
      />
    </div>
  );
}
