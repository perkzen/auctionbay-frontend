import { SignUpData } from '@/libs/validators/signup-validator';
import { api } from '@/libs/api/axios';
import { Endpoint } from '@/libs/api/endpoints';
import { LoginData } from '@/libs/validators/login-validator';
import { AxiosResponse } from 'axios';
import { LoginResponse } from '@/libs/types/user';

export const signUp = async (data: SignUpData) => {
  await api.post(Endpoint.SIGNUP, data);
};

export const login = async (data: LoginData) => {
  return (await api.post(Endpoint.LOGIN, data)) as AxiosResponse<LoginResponse>;
};

export const refreshTokens = async (refreshToken: string) => {
  const res = (await api.post(Endpoint.REFRESH_TOKEN, {
    refreshToken,
  })) as AxiosResponse<{ accessToken: string; refreshToken: string }>;
  return res.data;
};
