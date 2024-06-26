import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getAuction } from '@/libs/api/auctions';
import AuctionDetailsPage from '@/components/containers/auction-details-page';
import { AUCTION_KEY } from '@/libs/hooks/auction';

export default async function Auction({ params }: { params: { id: string } }) {
  const auctionId = params.id;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [AUCTION_KEY, auctionId],
    queryFn: () => getAuction(auctionId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuctionDetailsPage auctionId={auctionId} />
    </HydrationBoundary>
  );
}
