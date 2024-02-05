import { SignUpData } from '@/libs/validators/signup-validator';
import { api } from '@/api/axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { Endpoint } from '@/api/endpoints';

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
