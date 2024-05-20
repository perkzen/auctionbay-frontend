import React from 'react';
import ProfileHeader from '@/components/composites/profile/profile-header';
import StatRow from '@/components/composites/profile/stat-row';
import AuctionsTabList from '@/components/composites/profile/auctions-tab-list';

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
