import type { Metadata } from 'next';
import { Suspense } from 'react';

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
      <body>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
