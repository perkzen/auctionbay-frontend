import { api } from '@/libs/api/axios';
import { Endpoint } from '@/libs/api/endpoints';
import { AxiosResponse } from 'axios';
import { AuctionClosedNotification } from '@/libs/types/notification';

export const getNotifications = async () => {
  const res = (await api.get(`${Endpoint.NOTIFICATIONS}/me`)) as AxiosResponse<
    AuctionClosedNotification[]
  >;

  return res.data;
};

export const clearAllNotifications = async () => {
  await api.delete(`${Endpoint.NOTIFICATIONS}/me`);
};
