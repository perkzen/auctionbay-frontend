import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const AuctionCardSkeleton = () => {
  return (
    <Card className={'h-fit w-full sm:w-[216px]'}>
      <CardHeader className={'flex h-6 flex-row justify-between p-2 pb-0'}>
        <Skeleton className={'h-4 w-[46px] rounded-lg'} />
        <Skeleton className={'h-4 w-[46px] rounded'} />
      </CardHeader>
      <CardContent className={'flex flex-col gap-1 p-0'}>
        <div className={'flex flex-col gap-2 p-2'}>
          <Skeleton className={'h-6 w-[150px] rounded'} />
          <Skeleton className={'h-6 w-10 rounded'} />
        </div>
        <div className={'p-1'}>
          <Skeleton className={'h-[146px] w-full rounded-2xl'} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionCardSkeleton;
