'use client';
import EmptyList from '@/components/ui/empty-list';
import { useUserWonAuctions } from '@/libs/hooks/auction';
import AuctionsList from '@/components/compositions/auctions/auctions-list';
import React from 'react';

const WonAuctions = () => {
  const { data, isLoading, isPending, isFetching } = useUserWonAuctions();

  return (
    <AuctionsList
      isLoading={isLoading || isFetching || isPending}
      auctions={data || []}
      emptyListComponent={
        <div className={'flex h-full'}>
          <EmptyList
            title={'Nothing here yet?'}
            info={
              'When you win auction items will be displayed here! Go on and bid on your favorite items!'
            }
          />
        </div>
      }
    />
  );
};

export default WonAuctions;
