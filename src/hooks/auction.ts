import { createAuction, getAuctionList } from '@/api/auctions';
import { Auction } from '@/models/auction';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { CreateAuctionData } from '@/libs/validators/create-auction-validator';

export const AUCTION_LIST_KEY = 'auctionList';

export const useAuctionList = (
  opts?: UseQueryOptions<
    Auction[],
    AxiosError,
    Auction[],
    [typeof AUCTION_LIST_KEY]
  >
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
