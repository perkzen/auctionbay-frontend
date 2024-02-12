'use client';
import { useGetUser } from '@/hooks/user';
import StatCard from '@/components/pages/profile/stat-card';
import AuctionFilter from '@/components/pages/profile/auction-filter';

const Profile = () => {
  const { data } = useGetUser();
  return (
    <>
      <h1 className={'mb-4 text-3.5xl font-bold'}>
        Hello {data?.firstname} {data?.lastname}
      </h1>
      <div className={'flex flex-row gap-4'}>
        <StatCard
          title={'Earnings'}
          info={'All-time'}
          value={'0 €'}
          variant={'dark'}
        />
        <StatCard title={'Posted auctions'} info={'All-time'} value={'0'} />
        <StatCard title={'Currently bidding'} value={'0'} />
        <StatCard
          title={'Currently winning'}
          value={'0'}
          numberColor={'text-success'}
        />
      </div>
      <div className={'flex flex-1'}>
        <AuctionFilter />
      </div>
    </>
  );
};

export default Profile;
