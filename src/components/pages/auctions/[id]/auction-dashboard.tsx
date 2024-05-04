'use client';
import { useAuction } from '@/libs/hooks/auction';
import Image from 'next/image';
import BiddingHistoryCard from '@/components/pages/auctions/[id]/bidding-history-card';
import AuctionInfoCard from '@/components/pages/auctions/[id]/auction-info-card';

interface AuctionDashboardProps {
  auctionId: string;
}

const AuctionDashboard = ({ auctionId }: AuctionDashboardProps) => {
  const { data } = useAuction(auctionId);

  return (
    data && (
      <div className={'flex flex-grow flex-row gap-4'}>
        <div className={'relative flex max-h-[calc(100dvh-128px)] w-1/2'}>
          <Image
            src={data.imageUrl}
            alt={data.title}
            className={'rounded-2xl'}
            fill={true}
          />
        </div>
        <div className={'flex w-1/2 flex-col gap-4'}>
          <AuctionInfoCard
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

export default AuctionDashboard;
