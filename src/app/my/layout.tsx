import { PropsWithChildren } from 'react';

export default function MyLayout({ children }: PropsWithChildren) {
  return <div className="px-[24px]">{children}</div>;
}
