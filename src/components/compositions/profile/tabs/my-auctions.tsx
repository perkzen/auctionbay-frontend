'use client';
import EmptyList from '@/components/ui/empty-list';
import { useUserAuctions } from '@/libs/hooks/auction';
import AuctionsList from '@/components/compositions/auctions/auctions-list';

const MyAuctions = () => {
  const { data, isLoading, isFetching, isPending } = useUserAuctions();

  return (
    <AuctionsList
      isLoading={isLoading || isFetching || isPending}
      auctions={data || []}
      canEdit
      emptyListComponent={
        <div className={'flex h-full'}>
          <EmptyList
            title={'Oh no, no auctions added!'}
            info={
              'To add new auction click “+” button in navigation bar and new auctions wil be added here!'
            }
          />
        </div>
      }
    />
  );
};

export default MyAuctions;
