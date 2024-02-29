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
