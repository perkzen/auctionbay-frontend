'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginData, LoginValidator } from '@/libs/validators/login-validator';
import { useLogin } from '@/api/auth';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginValidator),
  });

  const { mutateAsync } = useLogin();

  const onSubmit = (data: LoginData) => {
    console.log(data);
    // toast.promise(
    //     async () => {
    //       await mutateAsync(data);
    //     },
    //     {
    //       position: 'top-center',
    //       loading: 'Creating account...',
    //       success: 'Account created!',
    //       error: 'Failed to create account. Please try again.',
    //     }
    // );
  };

  return (
    <form
      className={'flex w-[384px] flex-col gap-4'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={'flex flex-col gap-2'}>
        <label className={'font-light'} htmlFor={'email'}>
          E-mail
        </label>
        <Input
          {...register('email')}
          placeholder={'john.doe@mail.com'}
          id={'email'}
          error={errors.email?.message}
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label className={'font-light'} htmlFor={'password'}>
          Password
        </label>
        <PasswordInput
          {...register('password')}
          id={'password'}
          placeholder={'********'}
          error={errors.password?.message}
        />
      </div>
      <Link href={'/'} className={'text-tertiary ml-auto text-xs font-light'}>
        Forgot password?
      </Link>

      <Button className={'mt-4'}>Login</Button>
    </form>
  );
};

export default LoginForm;
