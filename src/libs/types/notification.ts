import { BidStatus } from '@/libs/types/bid';

export type Notification<T> = {
  id: string;
  data: T;
  userId: string;
  createdAt: string;
};

export type AuctionClosedData = {
  auctionId: string;
  imageUrl: string;
  message: string;
  bidStatus: BidStatus;
  outcome: number | 'CLOSED';
};

export type AuctionClosedNotification = Notification<AuctionClosedData>;

export const formatOutcome = (outcome: number | 'CLOSED'): string => {
  return typeof outcome === 'number' ? `${outcome}eur` : 'Done';
};
