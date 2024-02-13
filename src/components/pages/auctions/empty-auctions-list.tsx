import React from 'react';
import EmptyList from '@/components/ui/empty-list';

const EmptyAuctionsList = () => {
  return (
    <EmptyList
      title={'Oh no, no auctions yet!'}
      info={
        'To add new auction click “+” button in navigation bar or wait for other ' +
        'users to add new auctions.'
      }
    />
  );
};

export default EmptyAuctionsList;
