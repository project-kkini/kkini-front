'use client';

import { useState, useRef } from 'react';

interface ImageSwiperProps {
  images: string[];
  onIndexChange?: (index: number) => void;
}

export function ImageSwiper({ images, onIndexChange }: ImageSwiperProps) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const nextIndex = Math.round(scrollLeft / width) + 1;

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
      onIndexChange?.(nextIndex);
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={handleScroll}>
        {images.map((image, index) => (
          <div key={image + index} className="flex-none w-full h-[240px] snap-center">
            <img src={image} className="w-full h-full object-cover" alt={`restaurant-${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute top-0 w-full h-[120px] opacity-60 bg-gradient-to-b from-[#212124] to-transparent" />
      <div className="absolute bottom-[16px] right-[16px] px-[10px] py-[4px] bg-[rgba(33,33,36,0.6)] rounded-[14px]">
        <p className="text-[13px] text-white font-bold line-height-[18px]">
          {currentIndex}/{images.length}
        </p>
      </div>
    </div>
  );
}
