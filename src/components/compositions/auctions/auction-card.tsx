'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import TimeTag from '@/components/ui/time-tag';
import DeleteIcon from '@/assets/icons/Delete.svg';
import EditIcon from '@/assets/icons/Edit-white.svg';
import Image from 'next/image';
import { Auction, AuctionStatus } from '@/libs/types/auction';
import AuctionStatusTag from '@/components/compositions/auctions/auction-status-tag';
import Link from 'next/link';
import { PrivateRoute } from '@/routes';
import { Button } from '@/components/ui/button';
import { useDeleteAuction, USER_AUCTIONS_KEY } from '@/libs/hooks/auction';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import EditAuctionForm from '@/components/compositions/auctions/edit-auction-form';
import BidStatusTag from '@/components/compositions/auctions/bid-status-tag';
import { useSession } from 'next-auth/react';

interface AuctionCardProps {
  auction: Auction;
  canEdit?: boolean;
}

const AuctionCard = ({ auction, canEdit }: AuctionCardProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useDeleteAuction(auction.id, {
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [USER_AUCTIONS_KEY],
      });
    },
  });

  const handleDelete = () => {
    toast.promise(mutateAsync(), {
      loading: 'Deleting auction...',
      success: 'Auction deleted successfully',
      error: 'Failed to delete auction',
    });
  };

  const { data: session } = useSession();
  const userId = session?.user.id;

  const isBidding =
    Number(auction.bids?.length) > 0 && auction?.bids?.[0].bidderId === userId;
  const latestPrice =
    Number(auction?.bids?.length) > 0 ? auction.bids?.[0].amount : auction.startingPrice;

  return (
    <Card className={'h-fit w-full sm:w-[216px]'}>
      <CardHeader className={'flex flex-row justify-between p-2 pb-0'}>
        {isBidding && auction.bids?.[0] ? (
          <BidStatusTag status={auction.bids?.[0].status} size={'sm'} />
        ) : (
          <AuctionStatusTag status={auction.status} size={'sm'} />
        )}
        {auction.status === AuctionStatus.ACTIVE && (
          <TimeTag endsAt={auction.endsAt} size={'sm'} />
        )}
      </CardHeader>
      <CardContent className={'p-0'}>
        <Link href={`${PrivateRoute.AUCTIONS}/${auction.id}`}>
          <div className={'p-2'}>
            <CardTitle className={'text-base font-light'}>{auction.title}</CardTitle>
            <div className={'mt-2'}>{auction.closedPrice || latestPrice} €</div>
          </div>
          <div className={'relative h-[158px] w-full'}>
            <Image
              quality={100}
              src={auction.imageUrl}
              alt={'image'}
              fill
              sizes={'100%'}
              className={'rounded-2xl object-cover p-1'}
              priority
            />
          </div>
        </Link>
        {canEdit && (
          <CardFooter className={'flex w-full flex-row gap-1 p-2 pt-0'}>
            <Button variant={'outline'} size={'icon'} onClick={handleDelete}>
              <Image src={DeleteIcon} alt={'Delete'} width={16} height={16} />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant={'secondary'} className={'flex-grow'}>
                  <span className={'inline-flex gap-2'}>
                    <Image src={EditIcon} alt={'Edit'} width={16} height={16} />
                    Edit
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className={'max-w-[328px] sm:max-w-[533px]'}>
                <EditAuctionForm auction={auction} />
              </DialogContent>
            </Dialog>
          </CardFooter>
        )}
      </CardContent>
    </Card>
  );
};
export default AuctionCard;
