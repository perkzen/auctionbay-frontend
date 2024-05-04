'use client';
import EmptyList from '@/components/ui/empty-list';
import { useUserAuctions } from '@/libs/hooks/auction';
import AuctionsList from '@/components/ui/auctions-list';

const MyAuctions = () => {
  const { data } = useUserAuctions();

  return (
    <AuctionsList
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
