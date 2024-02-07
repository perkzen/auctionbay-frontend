import React from 'react';
import AuctionsList from '@/components/pages/auctions/auctions-list';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { AUCTION_LIST_KEY } from '@/hooks/auction';
import { getAuctionList } from '@/api/auctions';

export default async function Auctions() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [AUCTION_LIST_KEY],
    queryFn: getAuctionList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1 className={'mb-4 text-3.5xl font-bold'}>Auctions</h1>
      <div className={'flex flex-grow'}>
        <AuctionsList />
      </div>
    </HydrationBoundary>
  );
}
