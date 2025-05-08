import { Row } from '../components/Row';
import { Text } from '@/components/Text/Text';

// @TODO: 링크 갈아끼우기
const TERMS_MENU = [
  {
    title: '위치기반서비스 이용약관',
    link: '',
  },
  {
    title: '개인정보약관',
    link: '',
  },
  {
    title: '오픈소스 라이센스',
    link: '',
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
