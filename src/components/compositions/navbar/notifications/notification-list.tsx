import NotificationListItem from '@/components/compositions/navbar/notifications/notification-list-item';
import EmptyNotificationList from '@/components/compositions/navbar/notifications/empty-notification-list';
import { AuctionClosedNotification } from '@/libs/types/notification';
import NotificationSkeleton from '@/components/compositions/navbar/notifications/notification-skeleton';

interface NotificationListProps {
  isLoading?: boolean;
  data: AuctionClosedNotification[];
}

const NotificationList = ({ data, isLoading }: NotificationListProps) => {
  if (isLoading) {
    return (
      <ul className={'flex flex-col gap-4'}>
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index}>
            <NotificationSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {data?.length === 0 ? (
        <EmptyNotificationList />
      ) : (
        <ul className={'flex flex-col gap-4'}>
          {data?.map((notification) => (
            <NotificationListItem key={notification.id} notification={notification} />
          ))}
        </ul>
      )}
    </>
  );
};

export default NotificationList;
