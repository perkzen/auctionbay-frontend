import {
  createAuction,
  getAuctionList,
  getUserAuctions,
  getUserBiddingAuctions,
  getUserWonAuctions,
} from '@/libs/api/auctions';
import { Auction } from '@/libs/types/auction';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { CreateAuctionData } from '@/libs/validators/create-auction-validator';

export const AUCTION_LIST_KEY = 'auction-list';

export const useAuctionList = (
  opts?: UseQueryOptions<Auction[], AxiosError, Auction[], [typeof AUCTION_LIST_KEY]>
) => {
  return useQuery({
    queryKey: [AUCTION_LIST_KEY],
    queryFn: getAuctionList,
    ...opts,
  });
};

export const CREATE_AUCTION_KEY = 'create-auction';

export const useCreateAuction = (
  opts?: UseMutationOptions<Auction, AxiosError, CreateAuctionData, unknown>
) => {
  return useMutation({
    mutationKey: [CREATE_AUCTION_KEY],
    mutationFn: createAuction,
    ...opts,
  });
};

export const USER_AUCTIONS_KEY = 'user-auctions';

export const useUserAuctions = (
  opts?: UseQueryOptions<Auction[], AxiosError, Auction[], [typeof USER_AUCTIONS_KEY]>
) => {
  return useQuery({
    queryKey: [USER_AUCTIONS_KEY],
    queryFn: getUserAuctions,
    ...opts,
  });
};

export const USER_WON_AUCTIONS_KEY = 'user-won-auctions';

export const useUserWonAuctions = (
  opts?: UseQueryOptions<Auction[], AxiosError, Auction[], [typeof USER_WON_AUCTIONS_KEY]>
) => {
  return useQuery({
    queryKey: [USER_WON_AUCTIONS_KEY],
    queryFn: getUserWonAuctions,
    ...opts,
  });
};

export const USER_BIDDING_AUCTIONS_KEY = 'user-bidding-auctions';

export const useUserBiddingAuctions = (
  opts?: UseQueryOptions<
    Auction[],
    AxiosError,
    Auction[],
    [typeof USER_BIDDING_AUCTIONS_KEY]
  >
) => {
  return useQuery({
    queryKey: [USER_BIDDING_AUCTIONS_KEY],
    queryFn: getUserBiddingAuctions,
    ...opts,
  });
};
