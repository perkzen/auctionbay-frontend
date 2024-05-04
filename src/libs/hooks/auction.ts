import {
  createAuction,
  createAutoBid,
  createBid,
  deleteAuction,
  getAuction,
  getAuctionList,
  getBiddingHistory,
  getUserAuctions,
  getUserBiddingAuctions,
  getUserWonAuctions,
  updateAuction,
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
import { AuctionBid, AutoBid, Bid } from '@/libs/types/bid';
import { CreateBidData } from '@/libs/validators/create-bid-validator';
import { CreateAutoBidData } from '@/libs/validators/create-autobid-validator';
import { UpdateAuctionData } from '@/libs/validators/update-auction-validator';

export const AUCTION_KEY = 'auction';

export const useAuction = (
  id: string,
  opts?: UseQueryOptions<Auction, AxiosError, Auction, [typeof AUCTION_KEY, string]>
) => {
  return useQuery({
    queryKey: [AUCTION_KEY, id],
    queryFn: () => getAuction(id),
    ...opts,
  });
};

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

export const BIDDING_HISTORY_KEY = 'bidding-history';

export const useBiddingHistory = (
  id: string,
  opts?: UseQueryOptions<
    AuctionBid[],
    AxiosError,
    AuctionBid[],
    [typeof BIDDING_HISTORY_KEY, string]
  >
) => {
  return useQuery({
    queryKey: [BIDDING_HISTORY_KEY, id],
    queryFn: () => getBiddingHistory(id),
    ...opts,
  });
};

export const BID_KEY = 'bid';

export const useBid = (opts?: UseMutationOptions<Bid, Error, CreateBidData, unknown>) =>
  useMutation({
    mutationKey: [BID_KEY],
    mutationFn: createBid,
    ...opts,
  });

export const AUTO_BID_KEY = 'auto-bid';

export const useAutoBid = (
  opts?: UseMutationOptions<AutoBid, Error, CreateAutoBidData, unknown>
) =>
  useMutation({
    mutationKey: [AUTO_BID_KEY],
    mutationFn: createAutoBid,
    ...opts,
  });

export const DELETE_AUCTION_KEY = 'delete-auction';

export const useDeleteAuction = (
  id: string,
  opts?: UseMutationOptions<void, Error, void, unknown>
) =>
  useMutation<void, Error, void, unknown>({
    mutationKey: [DELETE_AUCTION_KEY, id],
    mutationFn: () => deleteAuction(id),
    ...opts,
  });

export const UPDATE_AUCTION_KEY = 'update-auction';

export const useUpdateAuction = (
  id: string,
  opts?: UseMutationOptions<Auction, Error, UpdateAuctionData, unknown>
) =>
  useMutation<Auction, Error, UpdateAuctionData, unknown>({
    mutationKey: [UPDATE_AUCTION_KEY, id],
    mutationFn: (data) => updateAuction(id, data),
    ...opts,
  });
