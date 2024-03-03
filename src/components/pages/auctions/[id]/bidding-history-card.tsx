import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HistoryItem from '@/components/pages/auctions/[id]/history-item';

const BiddingHistoryCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={'text-1.5xl font-bold'}>Bidding History (2)</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className={'flex flex-col'}>
          <HistoryItem
            firstname={'Domen'}
            lastname={'Perko'}
            imageUrl={''}
            createdAt={new Date().toString()}
            amount={32}
          />
          <HistoryItem
            firstname={'Domen'}
            lastname={'Perko'}
            imageUrl={''}
            createdAt={new Date().toString()}
            amount={32}
          />
        </ul>
      </CardContent>
    </Card>
  );
};

export default BiddingHistoryCard;
