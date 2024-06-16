import { ReactNode } from 'react';
import AuctionCard from '@/components/compositions/auctions/auction-card';
import { Auction } from '@/libs/types/auction';
import AuctionCardSkeleton from '@/components/compositions/auctions/auction-card-skeleton';

interface AuctionsListProps {
  auctions: Auction[];
  emptyListComponent?: ReactNode;
  canEdit?: boolean;
  isLoading?: boolean;
}

const AuctionsList = ({
  auctions,
  emptyListComponent,
  canEdit,
  isLoading,
}: AuctionsListProps) => {
  if (isLoading) {
    return (
      <div className={'flex w-full flex-col flex-wrap gap-4 sm:flex-row'}>
        {Array.from({ length: 4 }).map((_, index) => (
          <AuctionCardSkeleton key={index} />
        ))}
      </div>
    );
  }

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
