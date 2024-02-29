import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { clearAllNotifications, getNotifications } from '@/libs/api/notifications';
import { AuctionClosedNotification } from '@/libs/types/notification';
import { AxiosError } from 'axios';

export const GET_NOTIFICATIONS_KEY = 'get-notifications';

export const useGetNotifications = (
  opts?: UseQueryOptions<
    AuctionClosedNotification[],
    AxiosError,
    AuctionClosedNotification[],
    [typeof GET_NOTIFICATIONS_KEY]
  >
) =>
  useQuery({
    queryKey: [GET_NOTIFICATIONS_KEY],
    queryFn: getNotifications,
    ...opts,
  });

export const CLEAR_ALL_NOTIFICATIONS_KEY = 'clear-all-notifications';

export const useClearAllNotifications = (
  opts?: UseMutationOptions<void, AxiosError, void>
) =>
  useMutation({
    mutationKey: [CLEAR_ALL_NOTIFICATIONS_KEY],
    mutationFn: clearAllNotifications,
    ...opts,
  });
