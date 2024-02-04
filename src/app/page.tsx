import Image from 'next/image';
import AuctionsImage from '@/assets/auctions.svg';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className={'mt-[96px] flex flex-col gap-2'}>
        <h1 className="text-[64px] font-bold">E-auctions made easy!</h1>
        <p className={'text-center font-light'}>
          Simple way for selling your unused products, or <br /> getting a deal
          on product you want!
        </p>
      </div>
      <Button className={'mb-24 mt-8'}>Start bidding</Button>
      <Image src={AuctionsImage} alt={'auctions'} priority />
    </main>
  );
}
