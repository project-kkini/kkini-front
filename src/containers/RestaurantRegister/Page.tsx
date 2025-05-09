'use client';

import { useState } from 'react';
import { RequiredPage } from './Required/Page';
import { useRouter } from 'next/navigation';
import { OptionalPage } from './Optional/Page';
import { usePostNewRestaurant } from '@/hooks/usePostNewRestaurant';

export function RestaurantRegisterPage() {
  const router = useRouter();
  const [funnel, setFunnel] = useState<'required' | 'optional'>('required');

  const [name, setName] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<number>();
  const [selectedStatuses, setSelectedStatuses] = useState<number[]>([]);
  const [recommendText, setRecommendText] = useState('');

  const { mutate } = usePostNewRestaurant({
    // TODO:
    onSuccess: () => router.push(''),
  });

  if (funnel === 'required' || selectedPrice == null) {
    return (
      <RequiredPage
        name={name}
        selectedPrice={selectedPrice}
        selectedStatuses={selectedStatuses}
        onNameChange={setName}
        onSelectedPriceChange={setSelectedPrice}
        onSelectedStatusesChange={setSelectedStatuses}
        onCTAClick={() => {
          setFunnel('optional');
        }}
      />
    );
  }

  return (
    <OptionalPage
      recommendText={recommendText}
      onRecommendChange={setRecommendText}
      onCTAClick={() =>
        mutate({
          restaurantId: 0,
          content: recommendText,
          reviewImages: [],
          priceTagIds: [selectedPrice],
          needsTagIds: selectedStatuses,
        })
      }
    />
  );
}
