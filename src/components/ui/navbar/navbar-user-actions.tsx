import React from 'react';
import SignOutPopover from '@/components/ui/navbar/sign-out-popover';
import CreateAuctionButton from '@/components/ui/navbar/create-auction/create-auction-button';
import NotificationListButton from '@/components/ui/navbar/notifications/notification-list-button';

const NavbarUserActions = () => {
  return (
    <div className={'flex h-full flex-row gap-2 rounded-4xl bg-white p-1'}>
      <NotificationListButton />
      <CreateAuctionButton />
      <SignOutPopover />
    </div>
  );
};

export default NavbarUserActions;
