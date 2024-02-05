import AuctionBayLogo from '@/assets/auctionbay-logo.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from '@/routes';

const Navbar = () => {
  return (
    <div
      className={'mx-4 my-5 flex flex-row items-center justify-between sm:mx-8'}
    >
      <Link href={Route.HOME}>
        <Image
          src={AuctionBayLogo}
          alt={'AuctionBay Logo'}
          className={' h-12 w-12 sm:h-16 md:w-16'}
          priority
        />
      </Link>
      <div className={'flex flex-row items-center gap-2'}>
        <Button variant={'ghost'} size={'fit'}>
          Log in
        </Button>
        <div>or</div>
        <Link href={Route.SIGNUP}>
          <Button variant={'secondary'}>Sign up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
