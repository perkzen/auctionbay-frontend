'use client';
import EmptyList from '@/components/ui/empty-list';
import { useUserBiddingAuctions } from '@/libs/hooks/auction';
import AuctionsList from '@/components/compositions/auctions/auctions-list';
import React from 'react';

const BiddingAuctions = () => {
  const { data, isLoading, isPending, isFetching } = useUserBiddingAuctions();

  return (
    <AuctionsList
      isLoading={isLoading || isFetching || isPending}
      auctions={data || []}
      emptyListComponent={
        <div className={'flex h-full'}>
          <EmptyList
            title={'No bidding in progress!'}
            info={'Start bidding by finding new items you like on “Auction” page!'}
          />
        </div>
      }
    />
  );
};

export default BiddingAuctions;
