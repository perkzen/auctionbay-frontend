export enum BidStatus {
  OUTBID = 'OUTBID',
  WINNING = 'WINNING',
  WON = 'WON',
}

export const BidStatusText = {
  [BidStatus.OUTBID]: 'Outbid',
  [BidStatus.WINNING]: 'Winning',
  [BidStatus.WON]: 'Won',
};

export const getBidStatusText = (status: BidStatus) => BidStatusText[status] || status;

export type Bid = {
  id: string;
  amount: number;
  auctionId: string;
  bidderId: string;
  status: BidStatus;
  createdAt: Date;
};

export type AutoBid = {
  id: string;
  incrementAmount: number;
  maxAmount: number;
  bidderId: string;
  auctionId: string;
  createdAt: Date;
};

export type AuctionBid = {
  bidder: {
    firstname: string;
    lastname: string;
    imageUrl: string;
  };
  amount: number;
  createdAt: Date;
};

export type NewBidEventPayload = {
  bidderId: string;
  auctionId: string;
  amount: number;
};
