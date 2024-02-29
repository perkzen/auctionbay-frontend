import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BidStatusTag from '@/components/ui/bid-status-tag';
import { BidStatus } from '@/libs/types/bid';
import TimeTag from '@/components/ui/time-tag';
import Image from 'next/image';
import { Auction } from '@/libs/types/auction';

interface AuctionCardProps {
  auction: Auction;
}

const AuctionCard = ({ auction }: AuctionCardProps) => {
  return (
    <Card className={'h-fit w-[216px]'}>
      <CardHeader className={'flex flex-row justify-between p-2 pb-0'}>
        <BidStatusTag status={BidStatus.OUTBID} size={'sm'} />
        <TimeTag endsAt={new Date()} size={'sm'} />
      </CardHeader>
      <CardContent className={'p-0'}>
        <div className={'p-2'}>
          <CardTitle className={'text-base font-light'}>{auction.title}</CardTitle>
          <div className={'mt-2'}>{auction.startingPrice} €</div>
        </div>
        <div className={'relative h-[158px] w-full'}>
          <Image
            src={auction.imageUrl}
            alt={'image'}
            fill
            sizes={'100%'}
            className={'rounded-2xl object-cover p-1'}
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionCard;
