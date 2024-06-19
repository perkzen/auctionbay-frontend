import HomePage from '@/components/containers/home-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Auctionbay',
};

export default function Home() {
  return <HomePage />;
}
