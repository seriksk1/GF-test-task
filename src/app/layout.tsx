import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import './globals.css';

import { Sidebar } from '@/components';
import OrderProvider from '@/contexts/order-context';
import { cn } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GF',
  description: 'Test task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </head>
      <body className={`${spaceGrotesk.variable}`}>
        <OrderProvider>
          <div className={cn('flex h-screen overflow-hidden', 'max-md:flex-col')}>
            <Sidebar className="max-md:hidden" />
            {children}
          </div>
        </OrderProvider>
      </body>
    </html>
  );
}
