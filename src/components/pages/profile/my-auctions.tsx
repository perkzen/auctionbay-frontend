import React from 'react';
import EmptyList from '@/components/ui/empty-list';

const MyAuctions = () => {
  return (
    <div className={'flex h-full'}>
      <EmptyList
        title={'Oh no, no auctions added!'}
        info={
          'To add new auction click “+” button in navigation bar and new auctions wil be added here!'
        }
      />
    </div>
  );
};

export default MyAuctions;
