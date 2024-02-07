import React from 'react';
import AuctionCard from '@/components/pages/auctions/auction-card';

const Auctions = () => {
  return (
    <>
      <h1 className={'mb-4 text-3.5xl font-bold'}>Auctions</h1>
      <div>
        <AuctionCard />
      </div>
    </>
  );
};

export default Auctions;
