import { Endpoint } from '@/api/endpoints';
import { api } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { User } from '@/models/user';

export const getUser = async () => {
  const res = (await api.get(`${Endpoint.USERS}/me`)) as AxiosResponse<User>;
  return res.data;
};
