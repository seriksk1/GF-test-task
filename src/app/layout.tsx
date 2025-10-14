import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Sidebar } from '@/components';
import './globals.css';

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
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
