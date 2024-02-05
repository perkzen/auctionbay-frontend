import React from 'react';
import AuctionBayLogo from '@/assets/auctionbay-logo.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div
      className={'mx-4 my-5 flex flex-row items-center justify-between sm:mx-8'}
    >
      <Image
        src={AuctionBayLogo}
        alt={'AuctionBay Logo'}
        className={' h-12 w-12 sm:h-16 md:w-16'}
        priority
      />
      <div className={'flex flex-row items-center gap-2'}>
        <Button variant={'ghost'} className={'p-0'}>
          Log in
        </Button>
        <div>or</div>
        <Button variant={'secondary'}>Sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
