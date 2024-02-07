import SignupForm from '@/components/pages/signup/signup-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PublicRoute } from '@/routes';

const Signup = () => {
  return (
    <>
      <div className={'m-auto'}>
        <div className={'mb-16 flex flex-col gap-2 text-center'}>
          <h1 className={'text-3.5xl font-bold'}>Hello!</h1>
          <p className={'font-light'}>Please enter your details</p>
        </div>
        <SignupForm />
      </div>
      <span className={'text-center font-light'}>
        Already have an account?{' '}
        <Link href={PublicRoute.LOGIN}>
          <Button variant={'ghost'} size={'fit'}>
            Log in
          </Button>
        </Link>
      </span>
    </>
  );
};

export default Signup;
