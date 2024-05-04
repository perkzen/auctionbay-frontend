import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AuctionStatusTag from '@/components/ui/auction-status-tag';
import TimeTag from '@/components/ui/time-tag';
import { AuctionStatus } from '@/libs/types/auction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateBidForm from '@/components/pages/auctions/[id]/create-bid-form';
import CreateAutoBidForm from '@/components/pages/auctions/[id]/create-auto-bid-form';

interface AuctionInfoCardProps {
  status: AuctionStatus;
  title: string;
  description: string;
  endsAt: string;
}

const AuctionInfoCard = ({
  title,
  description,
  status,
  endsAt,
}: AuctionInfoCardProps) => {
  return (
    <Card>
      <CardHeader className={'flex flex-row justify-between '}>
        <AuctionStatusTag status={status} />
        {status === AuctionStatus.ACTIVE && <TimeTag endsAt={endsAt} />}
      </CardHeader>
      <CardContent className={'flex flex-col gap-4'}>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <Tabs defaultValue={'bid'} className={'flex w-full flex-grow flex-col'}>
          <TabsList className="flex w-fit flex-row gap-2 rounded-2xl bg-tertiary-100">
            <TabsTrigger value={'bid'} className={'w-[126px] rounded-2xl sm:py-2'}>
              Bid
            </TabsTrigger>
            <TabsTrigger value={'auto-bid'} className={'w-[126px] rounded-2xl sm:py-2'}>
              Auto bid
            </TabsTrigger>
          </TabsList>
          <TabsContent value={'bid'}>
            <CreateBidForm />
          </TabsContent>
          <TabsContent value={'auto-bid'}>
            <CreateAutoBidForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AuctionInfoCard;
