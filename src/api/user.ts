import { Endpoint } from '@/api/endpoints';
import { api } from '@/api/axios';
import { AxiosResponse } from 'axios';
import { UpdatePassword, UpdateProfile, User } from '@/models/user';

export const getUser = async () => {
  const res = (await api.get(`${Endpoint.USERS}/me`)) as AxiosResponse<User>;
  return res.data;
};

export const updateUser = async (data: UpdateProfile) => {
  const res = (await api.put(
    `${Endpoint.USERS}/me`,
    data
  )) as AxiosResponse<UpdateProfile>;
  return res.data;
};

export const updatePassword = async (data: UpdatePassword) => {
  const res = (await api.put(
    `${Endpoint.USERS}/me/update-password`,
    data
  )) as AxiosResponse<void>;
  return res.data;
};
