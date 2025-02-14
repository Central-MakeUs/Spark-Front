import { PropsWithChildren } from 'react';

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div className="m-auto min-h-screen w-screen max-w-[450px] overflow-auto bg-white no-select">
      {children}
    </div>
  );
}
