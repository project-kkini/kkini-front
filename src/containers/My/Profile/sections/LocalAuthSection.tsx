import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetTrigger,
} from '@/components/BottomSheet/BottomSheet';

import { Icon } from '@/components/Icon/Icon';
import { Map } from '@/components/Map/Map';
import { Text } from '@/components/Text/Text';
import { COLORS } from '@/styles/colors';

export function LocalAuthSection() {
  return (
    <div className="flex items-center gap-[4px] mt-[48px]">
      <Icon name="map" color={COLORS.orange[500]} />
      <Text variant="subtitle-14">
        현재 <LocalAuthTextButton />
        으로 내 회사 인증이 되어있어요.
      </Text>
    </div>
  );
}

function LocalAuthTextButton() {
  return (
    <BottomSheet>
      <BottomSheetTrigger>
        <button>
          <span className="text-orange-500 font-bold underline">강남역 직장인</span>
        </button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetBody className="pb-[122px]">
          <BottomSheetTitle>
            현재 <span className="text-orange-500">강남역</span>으로
            <br />내 위치가 인증되어있어요
          </BottomSheetTitle>
          <Text as="p" variant="subtitle-16" color={COLORS.gray[600]} className="mt-[6px] mb-[16px]">
            경기도 성남시 분당구 판교역로 166
          </Text>
          <Map size={{ width: '100%', height: 169 }} />
        </BottomSheetBody>
        <BottomSheetFooter className="pb-[40px]">
          <BottomSheetClose className="w-full">
            <button className="rounded-[8px] w-full h-[52px] bg-gray-100 font-medium">닫기</button>
          </BottomSheetClose>
          {/* @TODO: 기기 설정으로 위치 확인 후 바텀싯 닫기 */}
          <button className="rounded-[8px] w-full h-[52px] bg-orange-500 text-white font-medium">
            위치 재인증하기
          </button>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  );
}
