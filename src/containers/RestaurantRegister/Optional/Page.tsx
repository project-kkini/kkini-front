import { Spacing } from '@/components/Spacing';
import { CTA } from './components/CTA';
import { RecommendSection } from '@/containers/RestaurantRegister/Optional/sections/RecommendSection';
import { ImageSection } from '@/containers/RestaurantRegister/Optional/sections/ImageSection';

interface Props {
  recommendText: string;
  onRecommendChange: (text: string) => void;
  onCTAClick: () => void;
}

export function OptionalPage({ recommendText, onRecommendChange, onCTAClick }: Props) {
  return (
    <>
      <Spacing size={24} />
      <RecommendSection recommendText={recommendText} onRecommendTextChange={onRecommendChange} />
      <Spacing size={48} />
      <ImageSection />
      <CTA onCTAClick={onCTAClick} />
    </>
  );
}
