'use client';
import StatCard from '@/components/pages/profile/stat-card';
import {
  useUserActiveBids,
  useUserEarnings,
  useUserPostedAuctions,
  useUserWinningBids,
} from '@/hooks/statistics';

const StatRow = () => {
  const { data: earnings } = useUserEarnings();
  const { data: postedAuctions } = useUserPostedAuctions();
  const { data: activeBids } = useUserActiveBids();
  const { data: winningBids } = useUserWinningBids();

  return (
    <div className={'flex flex-row gap-4'}>
      <StatCard
        title={'Earnings'}
        info={'All-time'}
        value={`${earnings || 0} €`}
        variant={'dark'}
      />
      <StatCard title={'Posted auctions'} info={'All-time'} value={postedAuctions || 0} />
      <StatCard title={'Currently bidding'} value={activeBids || 0} />
      <StatCard
        title={'Currently winning'}
        value={winningBids || 0}
        numberColor={'text-success'}
      />
    </div>
  );
};

export default StatRow;
