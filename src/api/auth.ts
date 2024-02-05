import { SignUpData } from '@/libs/validators/signup-validator';
import { api } from '@/api/axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { Endpoint } from '@/api/endpoints';
import { signIn } from 'next-auth/react';
import { LoginData } from '@/libs/validators/login-validator';

export const SIGN_UP_KEY = 'SIGN_UP';

export const signup = async (data: SignUpData) => {
  const response = await api.post(Endpoint.SIGNUP, data);

  if (response.status !== 201) {
    throw new Error('Failed to sign up');
  }
};

export const useSignup = (
  opts?: UseMutationOptions<void, unknown, SignUpData, unknown>
) => {
  return useMutation({
    mutationKey: [SIGN_UP_KEY],
    mutationFn: signup,
    ...opts,
  });
};

export const LOGIN_KEY = 'LOGIN';

const login = async (data: LoginData) => {
  await signIn('credentials', {
    username: data.email,
    password: data.password,
    redirect: false,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: [LOGIN_KEY],
    mutationFn: login,
  });
};
