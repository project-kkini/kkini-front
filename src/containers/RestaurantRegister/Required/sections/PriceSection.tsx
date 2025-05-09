import { CSSProperties } from 'react';
import { Spacing } from '@/components/Spacing';
import { useGetPriceTags } from '@/hooks/useGetPriceTags';

interface Props {
  selectedPrice?: number;
  onPriceClick: (price: number) => void;
}

export function PriceSection({ selectedPrice, onPriceClick }: Props) {
  const { data } = useGetPriceTags();

  if (data == null) {
    return null;
  }

  return (
    <div style={ContainerStyle}>
      <div style={TitleContainerStyle}>
        <span style={TitleStyle}>먹은 메뉴의 가격대예요</span>
        <span style={RequiredStyle}>필수</span>
      </div>
      <Spacing size={16} />
      <div style={PriceContainerStyle}>
        {data.map((price) => (
          <div
            key={price.id}
            style={{
              ...PriceStyle,
              ...(selectedPrice === price.id ? SelectedPriceStyle : UnselectedPriceStyle),
            }}
            onClick={() => onPriceClick(price.id)}>
            {price.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const ContainerStyle: CSSProperties = {
  margin: '0 20px',
};

const TitleContainerStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
};

const TitleStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 18,
  color: '#212124',
};

const RequiredStyle: CSSProperties = {
  fontWeight: 700,
  fontSize: 13,
  color: '#FE6F0F',
};

const PriceContainerStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
};

const PriceStyle: CSSProperties = {
  padding: '10px 14px',
  borderRadius: 50,
  whiteSpace: 'pre-wrap',
};

const UnselectedPriceStyle: CSSProperties = {
  color: '#212124',
  border: '1px solid #DCDEE2',
};

const SelectedPriceStyle: CSSProperties = {
  color: 'white',
  border: '1px solid #212124',
  backgroundColor: '#212124',
};
