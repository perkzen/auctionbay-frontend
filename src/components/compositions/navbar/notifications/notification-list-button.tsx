'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BellIcon from '@/assets/icons/Notifications-none.svg';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import NotificationListDialog from '@/components/compositions/navbar/notifications/notification-list-dialog';
import { useGetNotifications } from '@/libs/hooks/notification';
import Ping from '@/components/ui/ping';

const NotificationListButton = () => {
  const { data } = useGetNotifications();

  const button = (
    <DialogTrigger asChild>
      <Button size={'fit'} variant={'tertiary'} className={'rounded-5xl p-2 sm:p-4'}>
        <Image src={BellIcon} alt={'Notifications'} width={24} height={24} />
      </Button>
    </DialogTrigger>
  );

  return (
    <Dialog>
      {data.length > 0 ? <Ping>{button}</Ping> : <>{button}</>}
      <DialogContent className={'max-w-[328px] sm:max-w-[442px]'}>
        <NotificationListDialog />
      </DialogContent>
    </Dialog>
  );
};

export default NotificationListButton;
