import { ReactNode } from 'react';
import AuctionCard from '@/components/composites/auctions/auction-card';
import { Auction } from '@/libs/types/auction';

interface AuctionsListProps {
  auctions: Auction[];
  emptyListComponent?: ReactNode;
  canEdit?: boolean;
}

const AuctionsList = ({ auctions, emptyListComponent, canEdit }: AuctionsListProps) => {
  return (
    <>
      {auctions?.length === 0 ? (
        <>{emptyListComponent}</>
      ) : (
        <div className={'flex flex-row flex-wrap gap-4'}>
          {auctions?.map((auction) => (
            <AuctionCard canEdit={canEdit} key={auction.id} auction={auction} />
          ))}
        </div>
      )}
    </>
  );
};

export default AuctionsList;
