import { USER_KEY } from '@/hooks/user';
import AuctionsTabList from '@/components/pages/profile/auctions-tab-list';
import StatRow from '@/components/pages/profile/stat-row';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import ProfileHeader from '@/components/pages/profile/profile-header';
import {
  getUserActiveBids,
  getUserEarnings,
  getUserPostedAuctions,
  getUserWinningBids,
} from '@/api/statistics';
import {
  USER_ACTIVE_BIDS_QUERY_KEY,
  USER_EARNINGS_QUERY_KEY,
  USER_POSTED_AUCTIONS_QUERY_KEY,
  USER_WINNING_BIDS_QUERY_KEY,
} from '@/hooks/statistics';

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
