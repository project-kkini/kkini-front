import { Spacing } from '@/components/Spacing';
import { CSSProperties } from 'react';
import { useGetNeedsTags } from '@/hooks/useGetNeedsTags';

interface Props {
  selectedStatuses: number[];
  onStatusClick: (status: number) => void;
}

export function StatusSection({ selectedStatuses, onStatusClick }: Props) {
  const { data } = useGetNeedsTags();

  if (data == null) {
    return null;
  }

  return (
    <div style={ContainerStyle}>
      <div style={TitleContainerStyle}>
        <span style={TitleStyle}>이런 상황에서 이 식당을 찾아요</span>
        <span style={RequiredStyle}>필수</span>
      </div>
      <Spacing size={16} />
      <div style={ChoiceContainerStyle}>
        {data.map((choice) => (
          <div
            key={choice.id}
            style={{
              ...ChoiceStyle,
              ...(selectedStatuses.includes(choice.id) ? SelectedStatusStyle : UnselectedStatusStyle),
            }}
            onClick={() => onStatusClick(choice.id)}>
            {choice.text}
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

const ChoiceContainerStyle: CSSProperties = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
};

const ChoiceStyle: CSSProperties = {
  padding: '10px 14px',
  borderRadius: 50,
  whiteSpace: 'pre-wrap',
};

const UnselectedStatusStyle: CSSProperties = {
  color: '#212124',
  border: '1px solid #DCDEE2',
};

const SelectedStatusStyle: CSSProperties = {
  color: 'white',
  border: '1px solid #212124',
  backgroundColor: '#212124',
};
