'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HistoryItem from '@/components/pages/auctions/[id]/history-item';
import { useParams } from 'next/navigation';
import { useBiddingHistory } from '@/libs/hooks/auction';

const BiddingHistoryCard = () => {
  const params = useParams();
  const { id } = params;

  const { data } = useBiddingHistory(id as string);

  return (
    <Card className={'h-full'}>
      <CardHeader>
        <CardTitle className={'text-1.5xl font-bold'}>
          Bidding History ({data?.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className={'flex flex-col'}>
          {data?.map((item, i) => (
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
      </CardContent>
    </Card>
  );
};

export default BiddingHistoryCard;
