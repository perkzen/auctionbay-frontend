import { ReactNode } from 'react';
import AuctionCard from '@/components/ui/auction-card';
import { Auction } from '@/libs/types/auction';

interface AuctionsListProps {
  auctions: Auction[];
  emptyListComponent?: ReactNode;
}

const AuctionsList = ({ auctions, emptyListComponent }: AuctionsListProps) => {
  return (
    <>
      {auctions?.length === 0 ? (
        <>{emptyListComponent}</>
      ) : (
        <div className={'flex flex-row flex-wrap gap-4'}>
          {auctions?.map((auction) => <AuctionCard key={auction.id} auction={auction} />)}
        </div>
      )}
    </>
  );
};

export default AuctionsList;
