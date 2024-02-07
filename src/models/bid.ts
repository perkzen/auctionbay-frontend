export enum BidStatus {
  OUTBID = 'outbid',
  IN_PROGRESS = 'in_progress',
  WINNING = 'winning',
  DONE = 'done',
}

export const BidStatusText = {
  [BidStatus.OUTBID]: 'Outbid',
  [BidStatus.IN_PROGRESS]: 'In Progress',
  [BidStatus.WINNING]: 'Winning',
  [BidStatus.DONE]: 'Done',
};

export const getBidStatusText = (status: BidStatus) =>
  BidStatusText[status] || status;
