import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { AUCTION_LIST_KEY } from '@/libs/hooks/auction';
import { getAuctionList } from '@/libs/api/auctions';
import AuctionsPage from '@/components/composites/auctions/auctions-page';

export default async function Auctions() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [AUCTION_LIST_KEY],
    queryFn: getAuctionList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AuctionsPage />
    </HydrationBoundary>
  );
}
