import AuctionBayLogo from '@/assets/auctionbay-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { PublicRoute } from '@/routes';
import { getServerAuthSession } from '@/libs/server/auth';
import NavbarUserActions from '@/components/ui/navbar/navbar-user-actions';
import NavbarAuthActions from '@/components/ui/navbar/navbar-auth-actions';
import NavigationTabs from '@/components/ui/navbar/navigation-tabs';

const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <div className={'m-4 flex flex-row items-center justify-between sm:mx-8 sm:my-5'}>
      <div className={'flex h-full flex-row gap-2 sm:gap-8'}>
        <Link href={PublicRoute.HOME} className={'relative h-12 w-12 sm:h-16 md:w-16'}>
          <Image src={AuctionBayLogo} alt={'AuctionBay Logo'} fill />
        </Link>
        <NavigationTabs />
      </div>
      {session ? <NavbarUserActions /> : <NavbarAuthActions />}
    </div>
  );
};
export default Navbar;
