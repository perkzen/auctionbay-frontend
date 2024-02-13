import React from 'react';
import EmptyList from '@/components/ui/empty-list';

const WonAuctions = () => {
  return (
    <div className={'flex h-full'}>
      <EmptyList
        title={'Nothing here yet?'}
        info={
          'When you win auction items will be displayed here! Go on and bid on your favorite items!'
        }
      />
    </div>
  );
};

export default WonAuctions;
