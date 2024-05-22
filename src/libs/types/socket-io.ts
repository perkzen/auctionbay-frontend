import { NewBidEventPayload } from '@/libs/types/bid';
import { AuctionClosedNotification } from '@/libs/types/notification';

export enum SocketEvent {
  JOIN_ROOM = 'join-room',
  LEAVE_ROOM = 'leave-room',
  NEW_BID = 'auction.new-bid',
  NEW_NOTIFICATION = 'new_notification',
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
  [SocketEvent.NEW_NOTIFICATION]: (data: AuctionClosedNotification) => void;
}
