import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { SignUpData } from '@/libs/validators/signup-validator';
import { signUp } from '@/api/auth';
import { signIn } from 'next-auth/react';
import { LoginData } from '@/libs/validators/login-validator';

export const SIGN_UP_KEY = 'SIGN_UP';

export const useSignup = (
  opts?: UseMutationOptions<void, unknown, SignUpData, unknown>
) => {
  return useMutation({
    mutationKey: [SIGN_UP_KEY],
    mutationFn: signUp,
    ...opts,
  });
};

export const SIGN_IN_KEY = 'SIGN_IN';

export const credentialsSignIn = async (
  data: LoginData
): Promise<{ ok: boolean }> => {
  const res = (await signIn('credentials', {
    username: data.email,
    password: data.password,
    redirect: false,
  })) as { ok: boolean };

  if (!res.ok) {
    throw new Error('Invalid credentials');
  }

  return res;
};

export const useSignIn = (
  opts?: UseMutationOptions<unknown, unknown, LoginData, unknown>
) => {
  return useMutation({
    mutationKey: [SIGN_IN_KEY],
    mutationFn: credentialsSignIn,
    ...opts,
  });
};
