import { BidStatus } from '@/libs/types/bid';

export enum AuctionStatus {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
}

export const AuctionStatusText = {
  [AuctionStatus.ACTIVE]: 'In progress',
  [AuctionStatus.CLOSED]: 'Done',
};

export const getAuctionStatusText = (status: AuctionStatus) => {
  return AuctionStatusText[status] || status;
};

export type Auction = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ownerId: string;
  createdAt: string;
  startingPrice: number;
  endsAt: string;
  status: AuctionStatus;
  bids: { status: BidStatus; amount: number; bidderId: string }[];
};
