'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import HistoryItem from '@/components/compositions/auctions/history-item';
import { useParams } from 'next/navigation';
import { useBiddingHistory } from '@/libs/hooks/auction';
import { useSocket } from '@/libs/hooks/socket';
import { useEffect } from 'react';
import { NewBidEventPayload } from '@/libs/types/bid';
import { useSession } from 'next-auth/react';
import { SocketEvent, SocketNamespace } from '@/libs/types/socket-io';

const BiddingHistoryCard = () => {
  const params = useParams();
  const { id } = params;

  const { data, refetch } = useBiddingHistory(id as string);

  const socket = useSocket({
    namespace: SocketNamespace.LIVE_BIDS,
  });

  const session = useSession();

  useEffect(() => {
    if (socket) {
      socket.emit(SocketEvent.JOIN_ROOM, String(id));
      socket.on(SocketEvent.NEW_BID, async (data: NewBidEventPayload) => {
        //if we are int the correct room and the bid is not from the current user, refetch the data
        if (data.auctionId === id && data.bidderId !== session.data?.user.id) {
          await refetch();
        }
      });
    }
    return () => {
      if (socket) {
        socket.off(SocketEvent.NEW_BID);
        socket.emit(SocketEvent.LEAVE_ROOM, String(id));
      }
    };
  }, [id, refetch, session.data?.user.id, socket]);

  useEffect(() => {}, [id, socket]);

  return (
    <Card className={'h-full'}>
      <CardHeader>
        <CardTitle className={'text-1.5xl font-bold'}>
          Bidding History ({data?.length || 0})
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
