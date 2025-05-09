import { ImageSection } from './sections/ImageSection';
import { InputSection } from './sections/InputSection';
import { LocalAuthSection } from './sections/LocalAuthSection';

export function MyProfilePage() {
  return (
    <>
      <div className="pt-[14px]">
        <ImageSection />
        <LocalAuthSection />
        <InputSection />
      </div>
      {/* @TODO: 회원 탈퇴 페이지 작업 시 노출 */}
      {/* <button className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2">
        <Text variant="body-14" color={COLORS.gray[600]} className="underline">
          회원 탈퇴
        </Text>
      </button> */}
    </>
  );
}
