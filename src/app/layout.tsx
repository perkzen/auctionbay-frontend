import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/libs/utils';
import Providers from '@/components/providers/providers';
import './globals.css';
import Script from 'next/script';

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
      <Script id="hotjar">
        {`
          (function (h, o, t, j, a, r) {
            h.hj =
              h.hj ||
              function () {
                // eslint-disable-next-line prefer-rest-params
                (h.hj.q = h.hj.q || []).push(arguments);
              };
            h._hjSettings = { hjid: ${5226377}, hjsv: 6 };
            a = o.getElementsByTagName("head")[0];
            r = o.createElement("script");
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
          })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
        `}
      </Script>
      <body className={cn(inter.className, 'flex min-h-screen flex-col bg-base')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
