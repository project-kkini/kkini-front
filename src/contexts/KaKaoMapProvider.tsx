'use client';

import { buildContext } from '@toss/react';
import Script from 'next/script';
import { PropsWithChildren, useState } from 'react';

interface KaKaoMapContextProps {
  isLoaded: boolean;
}
export const [KaKaoMapContextProvider, useKaKaoMapContext] = buildContext<KaKaoMapContextProps>('KaKaoMapContext');

export const KakKaoMapProvider = ({ children }: PropsWithChildren) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Script
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&autoload=false`}
        onLoad={() => {
          kakao.maps.load(() => {
            setIsLoaded(true);
          });
        }}
      />
      <KaKaoMapContextProvider isLoaded={isLoaded}>{children}</KaKaoMapContextProvider>
    </>
  );
};
