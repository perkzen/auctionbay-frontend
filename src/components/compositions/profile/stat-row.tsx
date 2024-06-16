'use client';
import StatCard from '@/components/compositions/profile/stat-card';
import {
  useUserActiveBids,
  useUserEarnings,
  useUserPostedAuctions,
  useUserWinningBids,
} from '@/libs/hooks/statistics';

const StatRow = () => {
  const { data: earnings } = useUserEarnings();
  const { data: postedAuctions } = useUserPostedAuctions();
  const { data: activeBids } = useUserActiveBids();
  const { data: winningBids } = useUserWinningBids();

  return (
    <div className={'grid max-w-full grid-cols-2 gap-4 sm:flex sm:flex-row sm:gap-4'}>
      <StatCard
        title="Earnings"
        info="All-time"
        value={earnings || 0}
        unit="€"
        variant="dark"
      />
      <StatCard title="Posted auctions" info="All-time" value={postedAuctions || 0} />
      <StatCard title="Currently bidding" value={activeBids || 0} />
      <StatCard
        title="Currently winning"
        value={winningBids || 0}
        numberColor="text-success"
      />
    </div>
  );
};

export default StatRow;
