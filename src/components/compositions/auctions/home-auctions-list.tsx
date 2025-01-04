'use client';
import { useAuctionList } from '@/libs/hooks/auction';
import AuctionsList from '@/components/compositions/auctions/auctions-list';
import EmptyList from '@/components/ui/empty-list';
import React from 'react';
import { Button } from '@/components/ui/button';
import CreateAuctionButton from '@/components/compositions/navbar/create-auction/create-auction-button';

const HomeAuctionsList = () => {
  const { data, isLoading, isFetching, isPending } = useAuctionList();

  return (
    <AuctionsList
      isLoading={isLoading || isFetching || isPending}
      auctions={data || []}
      emptyListComponent={
        <EmptyList
          title={'Oh no, no auctions yet!'}
          info={
            'To add new auction by clicking the button down below and new auctions will be added here!'
          }
          buttonComponent={
            <CreateAuctionButton buttonComponent={<Button>Add auction</Button>} />
          }
        />
      }
    />
  );
};

export default HomeAuctionsList;
