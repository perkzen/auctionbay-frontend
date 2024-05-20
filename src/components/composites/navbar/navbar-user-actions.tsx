import React from 'react';
import NotificationListButton from '@/components/composites/navbar/notifications/notification-list-button';
import CreateAuctionButton from '@/components/composites/navbar/create-auction/create-auction-button';
import SignOutPopover from '@/components/composites/navbar/sign-out-popover';

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
