import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BidStatusTag from '@/components/ui/bid-status-tag';
import { BidStatus } from '@/models/bid';
import TimeTag from '@/components/ui/time-tag';
import Image from 'next/image';
import { Auction } from '@/models/auction';

interface AuctionCardProps {
  auction: Auction;
}

const AuctionCard = ({ auction }: AuctionCardProps) => {
  return (
    <Card className={'w-[216px]'}>
      <CardHeader className={'flex flex-row justify-between'}>
        <BidStatusTag status={BidStatus.OUTBID} size={'sm'} />
        <TimeTag endsAt={new Date()} size={'sm'} />
      </CardHeader>
      <CardContent className={'p-0'}>
        <div className={'p-2'}>
          <CardTitle className={'text-base font-light'}>
            {auction.title}
          </CardTitle>
          <div className={'mt-2'}>{auction.startingPrice} €</div>
        </div>
        <div className={'relative h-[158px] w-full'}>
          <Image
            src={auction.imageUrl}
            alt={'image'}
            fill={true}
            objectFit={'cover'}
            className={'rounded-2xl p-1'}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionCard;
