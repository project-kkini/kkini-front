'use client';

import { useParams, useRouter } from 'next/navigation';

// import { mockRestaurant } from './mocks/restaurant';
import { Icon } from '@/components/Icon/Icon';
import { Map } from '@/components/Map/Map';
import { Spacing } from '@/components/Spacing';
import { useGetRestaurantDetail } from '@/hooks/useGetRestaurantDetail';
import { MapPinIcon } from './assets/MapPinIcon';
import { MapTirifoldIcon } from './assets/MapTirifoldIcon';
import { MoneyIcon } from './assets/MoneyIcon';
import { ThumbsUpIcon } from './assets/ThumbsUpIcon';
import { ImageSwiper } from './components/ImageSwiper';
import { NeedsTagList } from './components/NeedsTagList';
import { ReviewList } from './components/ReviewList';

export function RestaurantDetail() {
  const router = useRouter();

  const { id } = useParams();
  const { data } = useGetRestaurantDetail({ restaurantId: Number(id) });

  if (data == null) {
    return null;
  }

  const handleBack = () => {
    router.back();
  };

  const handleRoadAddress = () => {
    window.open(data.roadAddress, '_blank');
  };

  const handleRestaurantRegister = () => {
    router.push('/restaurant-register');
  };

  return (
    <div>
      <div className="relative">
        <ImageSwiper images={data.restaurantImageUrls} />
        <div className="absolute top-0 w-full flex items-center justify-between px-[20px] py-[12px]">
          <button onClick={handleBack}>
            <Icon size={24} name="chevronLeft" />
          </button>
          <Icon size={24} name="uploadSimple" />
        </div>
      </div>
      <div className="px-[20px] py-[24px]">
        <p className="text-[14px] text-gray-700 font-normal line-height-[21.7px]">{data.menuCategory}</p>
        <Spacing size={4} />
        <h1 className="text-[24px] font-bold line-height-[32.4px]">{data.name}</h1>
        <Spacing size={20} />
        <div className="flex items-center gap-[8px]">
          <ThumbsUpIcon />
          <p className="text-[16px] text-gray-700 font-medium line-height-[21.6px]">
            주변 직장인 <span className="text-orange-500">{data.reviews.length}명</span>의 추천
          </p>
        </div>
        <Spacing size={18} />
        <div className="flex items-center gap-[8px]">
          <MoneyIcon />
          <p className="text-[16px] text-gray-700 font-medium line-height-[21.6px]">
            {data.priceTags.map((tag) => tag.text).join(', ')}
          </p>
        </div>
        <Spacing size={18} />
        <div className="flex justify-between items-start">
          <div className="flex gap-[8px]">
            <MapPinIcon />
            <div>
              {/* <p className="text-[16px] text-gray-700 font-medium line-height-[21.6px]">
                회사에서 <span className="font-bold">{data.distance}m</span> 떨어져있어요
              </p> */}
              <Spacing size={5} />
              <p className="text-[14px] text-gray-600 font-normal line-height-[19.6px]">{data.address}</p>
            </div>
          </div>
          <button className="flex gap-[4px] items-center" onClick={handleRoadAddress}>
            <MapTirifoldIcon />
            <p className="text-[14px] text-blue-600 font-normal line-height-[19.6px] underline">길찾기</p>
          </button>
        </div>
        <Spacing size={16} />
        <Map size={{ width: '100%', height: 160 }} style={{ backgroundColor: '#dbdbdb' }} />
      </div>
      <div className="h-[8px] bg-gray-50" />
      <div className="px-[20px] py-[24px]">
        <h3 className="text-[18px] font-bold line-height-[24.3px]">이럴 때 방문해요!</h3>
        <Spacing size={20} />
        <NeedsTagList needsTags={data.needsTags} />
      </div>
      <div className="h-[8px] bg-gray-50" />
      <div className="px-[20px] pt-[24px] pb-[100px]">
        <h3 className="text-[18px] font-bold line-height-[24.3px]">
          주변 직장인들의 찐 후기 <span className="text-orange-500">{data.reviews.length}</span>
        </h3>
        <Spacing size={20} />
        <ReviewList reviews={data.reviews} />
      </div>
      <div className="fixed bottom-[24px] left-[50%] translate-x-[-50%]">
        <button
          className="flex gap-[6px] items-center bg-orange-500 py-[15px] px-[32px] rounded-[26px]"
          onClick={handleRestaurantRegister}>
          <ThumbsUpIcon color="white" />
          <p className="text-[16px] text-white font-medium line-height-[21.6px]">저도 추천할래요</p>
        </button>
      </div>
    </div>
  );
}
