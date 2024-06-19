'use client';
import { useAuction } from '@/libs/hooks/auction';
import Image from 'next/image';
import BiddingHistoryCard from '@/components/compositions/auctions/bidding-history-card';
import AuctionInfoCard from '@/components/compositions/auctions/auction-info-card';
import { useSession } from 'next-auth/react';

interface AuctionDetailsProps {
  auctionId: string;
}

const AuctionDetailsPage = ({ auctionId }: AuctionDetailsProps) => {
  const { data } = useAuction(auctionId);

  const { data: session } = useSession();

  const disableBidding = session?.user.id === data?.ownerId;

  return (
    data && (
      <div className={'flex flex-col gap-4 sm:flex-grow sm:flex-row'}>
        <div
          className={
            'relative flex h-[200px] sm:h-auto sm:max-h-[calc(100dvh-128px)] sm:w-1/2'
          }
        >
          <Image
            quality={100}
            src={data.imageUrl}
            alt={data.title}
            className={'rounded-2xl'}
            fill
          />
        </div>
        <div className={'flex w-full flex-col gap-4 sm:w-1/2'}>
          <AuctionInfoCard
            disableBidding={disableBidding}
            status={data.status}
            endsAt={data.endsAt}
            title={data.title}
            description={data.description}
          />
          <BiddingHistoryCard />
        </div>
      </div>
    )
  );
};

export default AuctionDetailsPage;
