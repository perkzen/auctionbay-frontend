import React from 'react';
import AuctionBayLogo from '@/assets/auctionbay-logo.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className={'flex flex-row justify-between px-8'}>
      <div className={'py-5'}>
        <Image src={AuctionBayLogo} alt={'AuctionBay Logo'} priority />
      </div>
      <div className={'flex flex-row items-center gap-2 py-8'}>
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
