import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MyAuctions from '@/components/pages/profile/tabs/my-auctions';
import BiddingAuctions from '@/components/pages/profile/tabs/bidding-auctions';
import WonAuctions from '@/components/pages/profile/tabs/won-auctions';

enum AuctionFilterType {
  MY_AUCTIONS = 'my_auctions',
  BIDDING = 'bidding',
  WON = 'won',
}

const AuctionsTabList = () => {
  return (
    <Tabs
      defaultValue={AuctionFilterType.MY_AUCTIONS}
      className={'flex w-full flex-grow flex-col'}
    >
      <TabsList className="mx-auto my-4 flex h-fit w-[402px] flex-row gap-2 rounded-2xl bg-tertiary-100">
        <TabsTrigger
          className={'w-[126px] rounded-2xl sm:py-2'}
          value={AuctionFilterType.MY_AUCTIONS}
        >
          My auctions
        </TabsTrigger>
        <TabsTrigger
          className={'w-[126px] rounded-2xl sm:py-2'}
          value={AuctionFilterType.BIDDING}
        >
          Bidding
        </TabsTrigger>
        <TabsTrigger
          className={'w-[126px] rounded-2xl sm:py-2'}
          value={AuctionFilterType.WON}
        >
          Won
        </TabsTrigger>
      </TabsList>
      <TabsContent value={AuctionFilterType.MY_AUCTIONS} className={'h-full'}>
        <MyAuctions />
      </TabsContent>
      <TabsContent value={AuctionFilterType.BIDDING} className={'h-full'}>
        <BiddingAuctions />
      </TabsContent>
      <TabsContent value={AuctionFilterType.WON} className={'h-full'}>
        <WonAuctions />
      </TabsContent>
    </Tabs>
  );
};

export default AuctionsTabList;
