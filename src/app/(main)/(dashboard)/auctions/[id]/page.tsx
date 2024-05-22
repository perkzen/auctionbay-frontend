import { QueryClient } from '@tanstack/react-query';
import { getAuction } from '@/libs/api/auctions';
import AuctionDashboardPage from '@/components/compositions/auctions/auction-dashboard';

export default async function Auction({ params }: { params: { id: string } }) {
  const auctionId = params.id;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['auction', auctionId],
    queryFn: () => getAuction(auctionId),
  });

  return <AuctionDashboardPage auctionId={auctionId} />;
}
