import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import {
  getUserActiveBids,
  getUserEarnings,
  getUserPostedAuctions,
  getUserWinningBids,
} from '@/libs/api/statistics';
import { AxiosError } from 'axios';

export const USER_EARNINGS_QUERY_KEY = 'user-earnings';

export const useUserEarnings = (
  opts?: Omit<
    UseQueryOptions<number, AxiosError, number, [typeof USER_EARNINGS_QUERY_KEY]>,
    'queryKey'
  >
) =>
  useQuery({
    queryKey: [USER_EARNINGS_QUERY_KEY],
    queryFn: getUserEarnings,
    ...opts,
  });

export const USER_POSTED_AUCTIONS_QUERY_KEY = 'user-posted-auctions';

export const useUserPostedAuctions = (
  opts?: Omit<
    UseQueryOptions<number, AxiosError, number, [typeof USER_POSTED_AUCTIONS_QUERY_KEY]>,
    'queryKey'
  >
) =>
  useQuery({
    queryKey: [USER_POSTED_AUCTIONS_QUERY_KEY],
    queryFn: getUserPostedAuctions,
    ...opts,
  });

export const USER_ACTIVE_BIDS_QUERY_KEY = 'user-active-bids';

export const useUserActiveBids = (
  opts?: Omit<
    UseQueryOptions<number, AxiosError, number, [typeof USER_ACTIVE_BIDS_QUERY_KEY]>,
    'queryKey'
  >
) =>
  useQuery({
    queryKey: [USER_ACTIVE_BIDS_QUERY_KEY],
    queryFn: getUserActiveBids,
    ...opts,
  });

export const USER_WINNING_BIDS_QUERY_KEY = 'user-winning-bids';

export const useUserWinningBids = (
  opts?: Omit<
    UseQueryOptions<number, AxiosError, number, [typeof USER_WINNING_BIDS_QUERY_KEY]>,
    'queryKey'
  >
) =>
  useQuery({
    queryKey: [USER_WINNING_BIDS_QUERY_KEY],
    queryFn: getUserWinningBids,
    ...opts,
  });
