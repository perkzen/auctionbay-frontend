import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/libs/utils';
import Providers from '@/components/providers/providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auctionbay',
  description: 'Auctionbay is the best place to buy and sell stuff.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'flex min-h-screen flex-col bg-base')}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
