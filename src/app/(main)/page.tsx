'use client';
import Image from 'next/image';
import AuctionsDesktopImage from '@/assets/auctions-desktop.svg';
import AuctionsMobileImage from '@/assets/auctions-mobile.svg';
import { PrivateRoute } from '@/routes';
import LinkButton from '@/components/ui/link-button';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center  overflow-auto">
      <div className={'mt-16 flex w-full flex-col gap-2 text-center md:mt-24'}>
        <h1 className="text-3.5xl font-bold sm:text-6.5xl">
          E-auctions made <br className={'visible md:hidden'} /> easy!
        </h1>
        <p className={'font-light'}>
          Simple way for selling your unused
          <br className={'visible md:hidden'} /> products, or getting a deal on product
          you <br className={'visible sm:hidden'} /> want!
        </p>
      </div>
      <LinkButton href={PrivateRoute.AUCTIONS} className={'mt-4 sm:mt-8'}>
        Start bidding
      </LinkButton>
      <div className={'relative mt-24 hidden w-full flex-grow sm:block'}>
        <Image quality={100} src={AuctionsDesktopImage} alt={'auctions'} fill priority />
      </div>
      <Image
        quality={100}
        src={AuctionsMobileImage}
        alt={'auctions'}
        className={'visible mt-auto sm:hidden'}
        priority
      />
    </main>
  );
}
