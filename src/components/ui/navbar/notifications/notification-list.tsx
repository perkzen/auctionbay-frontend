import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import NotificationListItem from '@/components/ui/navbar/notifications/notification-list-item';
import {
  GET_NOTIFICATIONS_KEY,
  useClearAllNotifications,
  useGetNotifications,
} from '@/libs/hooks/notification';
import EmptyNotificationList from '@/components/ui/navbar/notifications/empty-notification-list';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

const NotificationList = () => {
  const queryClient = useQueryClient();

  const { data } = useGetNotifications();

  const { mutateAsync } = useClearAllNotifications({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [GET_NOTIFICATIONS_KEY],
      });
    },
  });

  const clearNotifications = () => {
    toast.promise(mutateAsync(), {
      loading: 'Clearing notifications...',
      success: 'Notifications cleared',
      error: 'Failed to clear notifications',
    });
  };

  return (
    <>
      <DialogHeader className={'m-0 flex flex-row justify-between space-y-0'}>
        <DialogTitle>Notifications</DialogTitle>
        <Button
          variant={'ghost'}
          size={'fit'}
          className={'font-medium'}
          onClick={clearNotifications}
        >
          Clear all
        </Button>
      </DialogHeader>
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
