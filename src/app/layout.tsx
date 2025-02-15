import { KakKaoMapProvider } from '@/contexts/KaKaoMapProvider';
import { AuthProvider } from '@/contexts/AuthProvider';
import type { Metadata } from 'next';
import { CSSProperties, Suspense } from 'react';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: '끼니',
  description: '취업 자료 아카이빙 서비스 뽀각입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={BodyStyle}>
        <Suspense>
          <AuthProvider>
            <KakKaoMapProvider>
              <div style={ContainerStyle}>{children}</div>
            </KakKaoMapProvider>
          </AuthProvider>
        </Suspense>
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
