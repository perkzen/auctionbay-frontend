'use client';
import EmptyList from '@/components/ui/empty-list';
import { useUserBiddingAuctions } from '@/libs/hooks/auction';
import AuctionsList from '@/components/ui/auctions-list';

const BiddingAuctions = () => {
  const { data } = useUserBiddingAuctions();

  return (
    <AuctionsList
      auctions={data || []}
      emptyListComponent={
        <div className={'flex h-full'}>
          <EmptyList
            title={'No bidding in progress!'}
            info={'Start bidding by finding new items you like on “Auction” page!'}
          />
        </div>
      }
    />
  );
};

export default BiddingAuctions;
