import { useQueryClient } from '@tanstack/react-query';
import {
  GET_NOTIFICATIONS_KEY,
  useClearAllNotifications,
  useGetNotifications,
} from '@/libs/hooks/notification';
import { toast } from 'sonner';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import NotificationList from '@/components/compositions/navbar/notifications/notification-list';

const NotificationListDialog = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useGetNotifications();

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
      <NotificationList data={data || []} isLoading={isLoading} />
    </>
  );
};
export default NotificationListDialog;
