import React from 'react';

const EmptyAuctionsList = () => {
  return (
    <div className={'flex w-full flex-col items-center justify-center gap-2'}>
      <h1 className={'text-2.5xl font-bold'}>Oh no, no auctions yet!</h1>
      <p className={'max-w-[292px] text-center font-light text-tertiary'}>
        To add new auction click “+” button in navigation bar or wait for other
        users to add new auctions.
      </p>
    </div>
  );
};

export default EmptyAuctionsList;
