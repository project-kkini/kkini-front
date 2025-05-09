import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { Spacing } from '../../../components/Spacing';
import { DropdownContainer } from './components/DropdownContainer';
import { DUMMY_LIST } from '../../dummy';
import { DropdownItem } from './components/DropdownItem';
import { StatusSection } from './sections/StatusSection';
import { PriceSection } from '@/containers/RestaurantRegister/Required/sections/PriceSection';
import { CTA } from './components/CTA';
import { useRouter } from 'next/navigation';
import { useGetSearchRestaurantCount } from '@/hooks/useGetSearchRestaurantCount';
import { useLocation } from '@/hooks/useLocation';
import { useLocationCertificate } from './hooks/useLocationCertificate';
import { DisabledInput } from './components/DisabledInput';
import { Text } from '@/components/Text/Text';

interface Props {
  name: string;
  selectedPrice?: number;
  selectedStatuses: number[];
  onNameChange: (name: string) => void;
  onSelectedPriceChange: (price: number) => void;
  onSelectedStatusesChange: (statuses: number[]) => void;
  onCTAClick: () => void;
}

export function RequiredPage({
  name,
  selectedPrice,
  selectedStatuses,
  onNameChange,
  onSelectedPriceChange,
  onSelectedStatusesChange,
  onCTAClick,
}: Props) {
  const router = useRouter();
  const [focused, setFocused] = useState(false);

  const { certificated } = useLocationCertificate();
  const { latitude, longitude } = useLocation();
  // TODO:
  const { data } = useGetSearchRestaurantCount({ name, latitude, longitude });

  return (
    <>
      {focused ? null : (
        <>
          <Spacing size={12} />
          <div style={TitleStyle}>{`??역 직장인\n닉네임님의 추천 맛집은..`}</div>
          <Spacing size={8} />
          <div style={SubtitleStyle}>회사 주변 500m이내의 식당만 추천할 수 있어요</div>
        </>
      )}
      <Spacing size={76} />
      <div style={TextFieldContainerStyle}>
        <img src="/images/cat.png" style={ImageStyle} />
        {certificated ? (
          <input
            value={name}
            style={TextFieldStyle}
            placeholder="추천하는 식당을 검색해주세요"
            onChange={(e) => onNameChange(e.target.value)}
            onFocus={() => setFocused(true)}
          />
        ) : (
          <DisabledInput />
        )}
        {focused ? (
          <DropdownContainer>
            {DUMMY_LIST.map((item, index) => (
              <DropdownItem
                key={index}
                {...item}
                onClick={() => {
                  setFocused(false);
                  onNameChange(item.title);
                }}
              />
            ))}
          </DropdownContainer>
        ) : null}
      </div>
      {name !== '' ? (
        <>
          <Spacing size={48} />
          <PriceSection selectedPrice={selectedPrice} onPriceClick={onSelectedPriceChange} />
          <Spacing size={48} />
          <StatusSection
            selectedStatuses={selectedStatuses}
            onStatusClick={(status) => {
              if (selectedStatuses.includes(status)) {
                onSelectedStatusesChange(selectedStatuses.filter((s) => status !== s));
              } else {
                onSelectedStatusesChange([...selectedStatuses, status]);
              }
            }}
          />
          <CTA onCTAClick={onCTAClick} />
        </>
      ) : null}
      {!certificated && (
        <div style={AuthContainerStyle}>
          <Text variant="subtitle-16" fontWeight="bold">
            위치 접근 허용에 권한이 필요해요
          </Text>
          <Spacing size={10} />
          <Text variant="body-14" style={{ textAlign: 'center' }}>
            {`설정 > 뭐먹을끼니에서 위치정보 접근을`}
            <br />
            허용해주세요
          </Text>
        </div>
      )}
    </>
  );
}

const TitleStyle: CSSProperties = {
  margin: '0 20px',
  fontSize: 24,
  fontWeight: 700,
  whiteSpace: 'pre',
  lineHeight: '32.4px',
};

const SubtitleStyle: CSSProperties = {
  margin: '0 20px',
  fontSize: 14,
  color: '#868B94',
  lineHeight: '19.6px',
};

const TextFieldContainerStyle: CSSProperties = {
  position: 'relative',
};

const TextFieldStyle: CSSProperties = {
  fontSize: 16,
  display: 'block',
  padding: '20px',
  borderRadius: 12,
  backgroundColor: '#F2F3F6',
  border: 'none',
  margin: '0 20px',
  width: 'calc(100% - 40px)',
  outline: 'none',
};

const ImageStyle: CSSProperties = {
  position: 'absolute',
  right: 0,
  top: 10,
  transform: 'translateY(-100%)',
};

const AuthContainerStyle: CSSProperties = {
  borderRadius: 20,
  border: '1px solid #DCDEE2',
  padding: '28px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '24px 20px 0 20px',
};
