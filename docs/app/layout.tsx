import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';

import './global.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-nb-bg text-nb-fg" suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
