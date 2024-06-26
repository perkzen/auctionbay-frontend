import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PublicRoute } from '@/routes';
import AuctionsImage from '@/assets/auctions.svg';
import AuctionBayLogo from '@/assets/auctionbay-logo.svg';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={'flex flex-1 flex-row lg:items-stretch'}>
      <Image
        src={AuctionsImage}
        alt={'Auctions'}
        className={'mx-auto hidden h-screen w-auto xl:block'}
        priority
      />
      <aside
        className={
          'xs:mx-auto mx-2 my-2 flex w-full max-w-[448px] flex-col rounded-[32px] bg-white px-4 py-16 sm:px-8 xl:m-2'
        }
      >
        <Link href={PublicRoute.HOME}>
          <Image
            src={AuctionBayLogo}
            alt={'AuctionBay Logo'}
            className={'mx-auto'}
            priority
          />
        </Link>
        {children}
      </aside>
    </main>
  );
};

export default Layout;
