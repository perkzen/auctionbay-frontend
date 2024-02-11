import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { AxiosError } from 'axios';
import { User } from '@/models/user';

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
