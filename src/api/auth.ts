import { SignUpData } from '@/libs/validators/signup-validator';
import { api } from '@/api/axios';
import { Endpoint } from '@/api/endpoints';
import { LoginData } from '@/libs/validators/login-validator';
import { AxiosResponse } from 'axios';
import { LoginResponse } from '@/models/user';

export const signUp = async (data: SignUpData) => {
  const res = await api.post(Endpoint.SIGNUP, data);

  if (res.status !== 201) {
    throw new Error('Failed to sign up');
  }
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
