import React from 'react';
import HomeAuctionsList from '@/components/compositions/auctions/home-auctions-list';

const AuctionsPage = () => {
  return (
    <>
      <h1 className={'mb-4 text-3.5xl font-bold'}>Auctions</h1>
      <div className={'flex flex-grow'}>
        <HomeAuctionsList />
      </div>
    </>
  );
};

export default AuctionsPage;
