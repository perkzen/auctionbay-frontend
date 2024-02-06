import React from 'react';
import LoginForm from '@/components/pages/login/login-form';
import Link from 'next/link';
import { Route } from '@/routes';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <>
      <div className={'m-auto'}>
        <div className={'mb-16 flex flex-col gap-2 text-center'}>
          <h1 className={'text-3.5xl font-bold'}>Welcome back!</h1>
          <p className={'font-light'}>Please enter your details</p>
        </div>
        <LoginForm />
      </div>
      <span className={'text-center font-light'}>
        Don&apos;t have an account?{' '}
        <Link href={Route.SIGNUP}>
          <Button variant={'ghost'} size={'fit'}>
            Sign up
          </Button>
        </Link>
      </span>
    </>
  );
};

export default Login;