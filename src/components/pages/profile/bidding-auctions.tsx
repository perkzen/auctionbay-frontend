import React from 'react';
import EmptyList from '@/components/ui/empty-list';

const BiddingAuctions = () => {
  return (
    <div className={'flex h-full'}>
      <EmptyList
        title={'No bidding in progress!'}
        info={'Start bidding by finding new items you like on “Auction” page!'}
      />
    </div>
  );
};

export default BiddingAuctions;
