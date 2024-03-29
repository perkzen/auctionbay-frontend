'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BellIcon from '@/assets/icons/Notifications-none.svg';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import NotificationList from '@/components/ui/navbar/notifications/notification-list';

const NotificationListButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'fit'} variant={'tertiary'} className={'rounded-5xl p-2 sm:p-4'}>
          <Image src={BellIcon} alt={'Notifications'} width={24} height={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className={'sm:max-w-[442px]'}>
        <NotificationList />
      </DialogContent>
    </Dialog>
  );
};

export default NotificationListButton;
