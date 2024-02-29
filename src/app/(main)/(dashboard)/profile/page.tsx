import { USER_KEY } from '@/libs/hooks/user';
import AuctionsTabList from '@/components/pages/profile/auctions-tab-list';
import StatRow from '@/components/pages/profile/stat-row';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getUser } from '@/libs/api/user';
import ProfileHeader from '@/components/pages/profile/profile-header';
import {
  getUserActiveBids,
  getUserEarnings,
  getUserPostedAuctions,
  getUserWinningBids,
} from '@/libs/api/statistics';
import {
  USER_ACTIVE_BIDS_QUERY_KEY,
  USER_EARNINGS_QUERY_KEY,
  USER_POSTED_AUCTIONS_QUERY_KEY,
  USER_WINNING_BIDS_QUERY_KEY,
} from '@/libs/hooks/statistics';
import {
  USER_AUCTIONS_KEY,
  USER_BIDDING_AUCTIONS_KEY,
  USER_WON_AUCTIONS_KEY,
} from '@/libs/hooks/auction';
import {
  getUserAuctions,
  getUserBiddingAuctions,
  getUserWonAuctions,
} from '@/libs/api/auctions';

export default async function Profile() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [USER_KEY],
    queryFn: getUser,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_EARNINGS_QUERY_KEY],
    queryFn: getUserEarnings,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_ACTIVE_BIDS_QUERY_KEY],
    queryFn: getUserActiveBids,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_POSTED_AUCTIONS_QUERY_KEY],
    queryFn: getUserPostedAuctions,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_WINNING_BIDS_QUERY_KEY],
    queryFn: getUserWinningBids,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_AUCTIONS_KEY],
    queryFn: getUserAuctions,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_WON_AUCTIONS_KEY],
    queryFn: getUserWonAuctions,
  });

  await queryClient.prefetchQuery({
    queryKey: [USER_BIDDING_AUCTIONS_KEY],
    queryFn: getUserBiddingAuctions,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfileHeader />
      <StatRow />
      <div className={'flex flex-1'}>
        <AuctionsTabList />
      </div>
    </HydrationBoundary>
  );
}
