import { KakKaoMapProvider } from '@/contexts/KaKaoMapProvider';
import { AuthProvider } from '@/contexts/AuthProvider';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { CSSProperties, Suspense } from 'react';
import '@/styles/global.css';
import QueryProvider from '@/context/QueryProvider';

export const metadata: Metadata = {
  title: '끼니',
  description: '취업 자료 아카이빙 서비스 뽀각입니다.',
};

const pretendard = localFont({
  //localFont를 사용하여 로컬 폰트 적용
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={BodyStyle} className={pretendard.className}>
        <QueryProvider>
          <Suspense>
            <AuthProvider>
              <KakKaoMapProvider>
                <div style={ContainerStyle}>{children}</div>
              </KakKaoMapProvider>
            </AuthProvider>
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}

const BodyStyle: CSSProperties = {
  margin: 0,
};

const ContainerStyle: CSSProperties = {
  maxWidth: 640,
  margin: '0 auto',
  height: '100vh',
  overflow: 'auto',
};
