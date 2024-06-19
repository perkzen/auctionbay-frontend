import ProfilePage from '@/components/containers/profile-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile | Auctionbay',
};

export default async function Profile() {
  return <ProfilePage />;
}
