import { AuctionBid } from '@/libs/types/bid';
import HistoryItem from '@/components/compositions/auctions/history-item';

interface BiddingHistoryListProps {
  data: AuctionBid[];
  isLoading?: boolean;
}

const BiddingHistoryList = ({ data, isLoading }: BiddingHistoryListProps) => {
  if (isLoading) {
    return (
      <div className={'flex h-full flex-col items-center justify-center gap-2 py-8'}>
        <div className={'text-[18px] font-semibold leading-[21.6px]'}>Loading...</div>
        <div className={'text-center text-tertiary'}>
          Please wait while we fetch the data.
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={'flex h-full flex-col items-center justify-center gap-2 py-8'}>
        <div className={'text-[18px] font-semibold leading-[21.6px]'}>No bids yet!</div>
        <div className={'text-center text-tertiary'}>
          Place your bid to have a chance to get this item.
        </div>
      </div>
    );
  }
  return (
    <ul className={'flex flex-col'}>
      {data.map((item, i) => (
        <HistoryItem
          key={i}
          firstname={item.bidder.firstname}
          lastname={item.bidder.lastname}
          imageUrl={item.bidder.imageUrl}
          createdAt={item.createdAt.toString()}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default BiddingHistoryList;
