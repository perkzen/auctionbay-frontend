import React from 'react';
import ProfileHeader from '@/components/compositions/profile/profile-header';
import StatRow from '@/components/compositions/profile/stat-row';
import AuctionsTabList from '@/components/compositions/profile/auctions-tab-list';

const ProfilePage = () => {
  return (
    <>
      <ProfileHeader />
      <StatRow />
      <div className={'flex flex-1'}>
        <AuctionsTabList />
      </div>
    </>
  );
};

export default ProfilePage;
