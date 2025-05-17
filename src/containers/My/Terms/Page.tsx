import { Text } from '@/components/Text/Text';
import { Row } from '../components/Row';

// @TODO: 링크 갈아끼우기
const TERMS_MENU = [
  {
    title: '위치기반서비스 이용약관',
    link: 'https://hyewoncho.notion.site/1ad24d0962228030bcb9d48dbb5f3d95?pvs=4',
  },
  {
    title: '개인정보약관',
    link: 'https://hyewoncho.notion.site/1ad24d096222805d87f7cb37a1966d31?pvs=4',
  },
  {
    title: '오픈소스 라이센스',
    link: 'https://hyewoncho.notion.site/1ad24d09622280658eecf143af36938f?pvs=4',
  },
];
export function MyTermsPage() {
  return (
    <div className="flex flex-col gap-[32px] pt-[24px]">
      {TERMS_MENU.map((menu) => (
        <Row key={menu.title}>
          <Text>{menu.title}</Text>
        </Row>
      ))}
    </div>
  );
}
