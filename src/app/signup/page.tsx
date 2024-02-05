import AuctionsImage from '@/assets/auctions.svg';
import Image from 'next/image';
import SignupForm from '@/components/pages/signup/signup-form';
import AuctionBayLogo from '@/assets/auctionbay-logo.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Route } from '@/routes';

const Signup = () => {
  return (
    <main className={'flex  flex-1 flex-row  lg:items-stretch'}>
      <Image
        src={AuctionsImage}
        alt={'Auctions'}
        className={'mx-auto hidden h-screen w-auto xl:block'}
        priority
      />
      <aside
        className={
          'mx-auto my-2 flex max-w-[448px] flex-col rounded-[32px] bg-white px-8 py-16 xl:m-2'
        }
      >
        <Link href={Route.HOME}>
          <Image
            src={AuctionBayLogo}
            alt={'AuctionBay Logo'}
            className={'mx-auto'}
            priority
          />
        </Link>
        <div className={'m-auto'}>
          <div className={'mb-16 flex flex-col gap-2 text-center'}>
            <h1 className={'text-3.5xl font-bold'}>Hello!</h1>
            <p className={'font-light'}>Please enter your details</p>
          </div>
          <SignupForm />
        </div>
        <span className={'text-center font-light'}>
          Already have an account?{' '}
          <Link href={Route.LOGIN}>
            <Button variant={'ghost'} size={'fit'}>
              Log in
            </Button>
          </Link>
        </span>
      </aside>
    </main>
  );
};

export default Signup;
