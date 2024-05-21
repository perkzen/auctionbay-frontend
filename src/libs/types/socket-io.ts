import { NewBidEventPayload } from '@/libs/types/bid';

export enum SocketEvent {
  JOIN_ROOM = 'join-room',
  LEAVE_ROOM = 'leave-room',
  NEW_BID = 'auction.new-bid',
}

export enum SocketNamespace {
  LIVE_BIDS = '/live-bids',
  LIVE_NOTIFICATIONS = '/live-notifications',
}

export interface SocketEmitEvents {
  [SocketEvent.JOIN_ROOM]: (auctionId: string) => void;
  [SocketEvent.LEAVE_ROOM]: (auctionId: string) => void;
}

export interface SocketListenEvents {
  [SocketEvent.NEW_BID]: (data: NewBidEventPayload) => void;
}
