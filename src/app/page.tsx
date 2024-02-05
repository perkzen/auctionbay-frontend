import Image from 'next/image';
import AuctionsDesktopImage from '@/assets/auctions-desktop.svg';
import AuctionsMobileImage from '@/assets/auctions-mobile.svg';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex  flex-1 flex-col items-center  overflow-auto">
      <div className={'mt-16 flex w-full flex-col gap-2 text-center md:mt-24'}>
        <h1 className="text-[32px] font-bold leading-[38.4px] sm:text-[64px] sm:leading-none">
          E-auctions made <br className={'visible md:hidden'} /> easy!
        </h1>
        <p className={' font-light'}>
          Simple way for selling your unused
          <br className={'visible md:hidden'} /> products, or getting a deal on
          product you <br className={'visible sm:hidden'} /> want!
        </p>
      </div>
      <Button className={'mt-4 sm:mt-8'}>Start bidding</Button>
      <Image
        src={AuctionsDesktopImage}
        alt={'auctions'}
        className={'mt-auto hidden sm:block'}
        priority
      />
      <Image
        src={AuctionsMobileImage}
        alt={'auctions'}
        className={'visible mt-auto sm:hidden'}
        priority
      />
    </main>
  );
}
