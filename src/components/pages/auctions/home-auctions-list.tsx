'use client';
import { useAuctionList } from '@/libs/hooks/auction';
import AuctionsList from '@/components/ui/auctions-list';
import EmptyList from '@/components/ui/empty-list';
import React from 'react';

const HomeAuctionsList = () => {
  const { data } = useAuctionList();

  return (
    <AuctionsList
      auctions={data || []}
      emptyListComponent={
        <EmptyList
          title={'Oh no, no auctions yet!'}
          info={
            'To add new auction click “+” button in navigation bar or wait for other ' +
            'users to add new auctions.'
          }
        />
      }
    />
  );
};

export default HomeAuctionsList;
