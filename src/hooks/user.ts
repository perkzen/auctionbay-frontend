import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { getUser, updatePassword, updateUser } from '@/api/user';
import { AxiosError } from 'axios';
import { UpdateProfile, User } from '@/models/user';

export const USER_KEY = 'user';

export const useGetUser = (
  opts?: UseQueryOptions<User, AxiosError, User, [typeof USER_KEY]>
) => {
  return useQuery({
    queryKey: [USER_KEY],
    queryFn: getUser,
    ...opts,
  });
};

export const UPDATE_USER_KEY = 'update-user';

export const useUpdateUser = (
  opts?: UseMutationOptions<UpdateProfile, AxiosError, UpdateProfile, unknown>
) => {
  return useMutation({
    mutationKey: [UPDATE_USER_KEY],
    mutationFn: updateUser,
    ...opts,
  });
};

export const UPDATE_PASSWORD_KEY = 'update-password';

export const useUpdatePassword = (
  opts?: UseMutationOptions<void, AxiosError, unknown, unknown>
) => {
  return useMutation({
    mutationKey: [UPDATE_PASSWORD_KEY],
    mutationFn: updatePassword,
    ...opts,
  });
};
