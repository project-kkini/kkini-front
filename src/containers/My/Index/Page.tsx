'use client';

import { Border } from '@/components/Border/Border';
import { COLORS } from '@/styles/colors';
import { IconProps } from '@/components/Icon/Icon';
import { Menu } from './components/Menu';
import { Profile } from './components/Profile';
import { Row } from '../components/Row';
import { Text } from '@/components/Text/Text';
import { useRouter } from 'next/navigation';

const MY_PAGE_MENU: { iconName: IconProps['name']; title: string; link: string }[] = [
  { iconName: 'thumbsUp', title: '나의 끼니', link: '/my/my-kkini' },
  { iconName: 'envelopeOpen', title: '끼니팀에게 피드백주기', link: 'https://naver.com' }, // @TODO: 피드백 페이지 갈아끼우기
  { iconName: 'note', title: '약관 및 정책', link: '/my/terms' },
];

const VERSION = '1.0.0';

export function MyPage() {
  const router = useRouter();

  return (
    <div className="pt-[20px]">
      <Row onClick={() => router.push('/my/profile')}>
        <Profile name="톨머프" imgSrc="https://avatars.githubusercontent.com/u/26402298?v=4" subwayStationName="역삼" />
      </Row>

      <Border className="mt-[16px] mb-[24px]" />

      <div className="flex flex-col gap-[24px]">
        {MY_PAGE_MENU.map((menu) => (
          <Row key={menu.iconName} onClick={() => router.push(menu.link)}>
            <Menu iconName={menu.iconName} title={menu.title} />
          </Row>
        ))}
      </div>

      <Border className="my-[24px]" />

      <Row clickable={false} rightAddon={<Text color={COLORS.gray[700]}>{VERSION}</Text>}>
        <Text>버전 정보</Text>
      </Row>
      <Text as="span" className="inline-block underline mt-[80px] cursor-pointer" color={COLORS.gray[600]}>
        로그아웃
      </Text>
    </div>
  );
}
