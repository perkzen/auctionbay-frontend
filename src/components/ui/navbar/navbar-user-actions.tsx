import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BellIcon from '@/assets/icons/Notifications-none.svg';
import SignOutPopover from '@/components/ui/navbar/sign-out-popover';
import CreateAuctionButton from '@/components/ui/navbar/create-auction/create-auction-button';

const NavbarUserActions = () => {
  return (
    <div className={'flex h-full flex-row gap-2 rounded-4xl bg-white p-1'}>
      <Button
        size={'fit'}
        variant={'tertiary'}
        className={'rounded-5xl p-2 sm:p-4'}
      >
        <Image src={BellIcon} alt={'Notifications'} width={24} height={24} />
      </Button>
      <CreateAuctionButton />
      <SignOutPopover />
    </div>
  );
};

export default NavbarUserActions;
