import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AuctionStatusTag from '@/components/compositions/auctions/auction-status-tag';
import TimeTag from '@/components/ui/time-tag';
import { AuctionStatus } from '@/libs/types/auction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateBidForm from '@/components/compositions/auctions/create-bid-form';
import CreateAutoBidForm from '@/components/compositions/auctions/create-auto-bid-form';

interface AuctionInfoCardProps {
  status: AuctionStatus;
  title: string;
  description: string;
  endsAt: string;
  disableBidding: boolean;
  startingPrice?: number;
}

const AuctionInfoCard = ({
  title,
  description,
  status,
  endsAt,
  disableBidding,
  startingPrice,
}: AuctionInfoCardProps) => {
  return (
    <Card>
      <CardHeader className={'flex flex-row justify-between'}>
        <AuctionStatusTag status={status} />
        {status === AuctionStatus.ACTIVE && <TimeTag endsAt={endsAt} />}
      </CardHeader>
      <CardContent className={'flex flex-col gap-4'}>
        <CardTitle>{title}</CardTitle>
        <p className={'text-sm font-light'}>Starting price: {startingPrice} $</p>
        <p>{description}</p>
        <Tabs defaultValue={'bid'} className={'flex w-full flex-grow flex-col gap-4'}>
          <TabsList className="flex w-full flex-row gap-2 rounded-2xl bg-tertiary-100 sm:w-fit">
            <TabsTrigger
              value={'bid'}
              className={'w-full rounded-2xl sm:w-[126px] sm:py-2'}
            >
              Bid
            </TabsTrigger>
            <TabsTrigger
              value={'auto-bid'}
              className={'w-full rounded-2xl sm:w-[126px] sm:py-2'}
            >
              Auto bid
            </TabsTrigger>
          </TabsList>
          <TabsContent value={'bid'}>
            <CreateBidForm disabled={disableBidding} />
          </TabsContent>
          <TabsContent value={'auto-bid'}>
            <CreateAutoBidForm disabled={disableBidding} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AuctionInfoCard;
