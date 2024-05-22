import { ReactNode } from 'react';
import AuctionCard from '@/components/compositions/auctions/auction-card';
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
        <div className={'flex w-full flex-col flex-wrap gap-4 sm:flex-row'}>
          {auctions?.map((auction) => (
            <AuctionCard canEdit={canEdit} key={auction.id} auction={auction} />
          ))}
        </div>
      )}
    </>
  );
};

export default AuctionsList;
