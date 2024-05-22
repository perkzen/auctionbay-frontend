import React from 'react';
import SignupForm from '@/components/compositions/signup/signup-form';
import Link from 'next/link';
import { PublicRoute } from '@/routes';
import { Button } from '@/components/ui/button';

const SignupPage = () => {
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

export default SignupPage;
