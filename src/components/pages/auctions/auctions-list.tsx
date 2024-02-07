'use client';
import React from 'react';
import { useAuctionList } from '@/hooks/auction';
import AuctionCard from '@/components/pages/auctions/auction-card';
import EmptyAuctionsList from '@/components/pages/auctions/empty-auctions-list';
import { Auction } from '@/models/auction';

const AuctionsList = () => {
  //const { data } = useAuctionList();
  const data = [] as Auction[];
  return (
    <>
      {data?.length === 0 ? (
        <EmptyAuctionsList />
      ) : (
        <div className={'flex flex-row flex-wrap gap-4'}>
          {data?.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      )}
    </>
  );
};

export default AuctionsList;
