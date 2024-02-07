import { getAuctionList } from '@/api/auctions';
import { Auction } from '@/models/auction';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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
