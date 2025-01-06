'use client';
import { useAuctionList } from '@/libs/hooks/auction';
import AuctionsList from '@/components/compositions/auctions/auctions-list';
import EmptyList from '@/components/ui/empty-list';
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CreateAuctionButton from '@/components/compositions/navbar/create-auction/create-auction-button';
import { usePathname } from 'next/navigation';
import Hotjar from '@hotjar/browser';

const HomeAuctionsList = () => {
  const { data, isLoading, isFetching, isPending } = useAuctionList();
  const pathname = usePathname();

  useEffect(() => {
    try {
      Hotjar.init(5226377, 6, {
        debug: true,
      });

      Hotjar.event(`viewed_${pathname}`);
    } catch (e) {
      console.log(e);
    }
  }, [pathname]);

  return (
    <AuctionsList
      isLoading={isLoading || isFetching || isPending}
      auctions={data || []}
      emptyListComponent={
        pathname.includes('auctions2') ? (
          <EmptyList
            title={'Oh no, no auctions yet!'}
            info={
              'To add new auction by clicking the button down below and new auctions will be added here!'
            }
            buttonComponent={
              <CreateAuctionButton buttonComponent={<Button>Add auction</Button>} />
            }
          />
        ) : (
          <EmptyList
            title={'Oh no, no auctions yet!'}
            info={
              'To add new auction click “+” button in navigation bar or wait for other ' +
              'users to add new auctions.'
            }
          />
        )
      }
    />
  );
};

export default HomeAuctionsList;
