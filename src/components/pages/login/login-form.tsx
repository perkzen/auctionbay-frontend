'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginData, LoginValidator } from '@/libs/validators/login-validator';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSignIn } from '@/hooks/auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Route } from '@/routes';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginValidator),
  });

  const router = useRouter();

  const { mutateAsync, isLoading } = useSignIn({
    onSuccess: () => {
      router.push(Route.AUCTIONS);
    },
  });

  const onSubmit = async (data: LoginData) => {
    toast.promise(mutateAsync(data), {
      loading: 'Logging in...',
      success: 'Logged in successfully!',
      error: 'Invalid credentials!',
      position: 'top-center',
    });
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
      <Link
        href={Route.FORGOT_PASSWORD}
        className={'ml-auto text-xs font-light text-tertiary'}
      >
        Forgot password?
      </Link>

      <Button className={'mt-4'} disabled={isLoading}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
