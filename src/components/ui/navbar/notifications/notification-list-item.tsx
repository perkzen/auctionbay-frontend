import React from 'react';
import Image from 'next/image';
import { AuctionClosedNotification, formatOutcome } from '@/libs/types/notification';
import BidStatusTag from '@/components/ui/bid-status-tag';
import { BidStatus } from '@/libs/types/bid';
import { formatDate } from 'date-fns';

interface NotificationListItemProps {
  notification: AuctionClosedNotification;
}

const NotificationListItem = ({ notification }: NotificationListItemProps) => {
  const outcome = formatOutcome(notification.data.outcome);

  return (
    <li className={'flex flex-row'}>
      <Image
        src={notification.data.imageUrl}
        alt={'Notification'}
        width={40}
        height={40}
        className={'rounded'}
      />
      <div className={'my-[2px] ml-2 flex flex-col'}>
        <p className={'font-light'}>{notification.data.message}</p>
        <p className={'text-xxs font-light text-tertiary'}>
          {formatDate(notification.createdAt, 'd.M.yyyy')}
        </p>
      </div>
      <div className={'ml-auto flex flex-row  items-center  gap-2'}>
        <BidStatusTag status={notification.data.bidStatus} />
        <BidStatusTag status={outcome as BidStatus} />
      </div>
    </li>
  );
};

export default NotificationListItem;
