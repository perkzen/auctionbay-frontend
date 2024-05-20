'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginData, LoginValidator } from '@/libs/validators/login-validator';
import { Input } from '@/components/ui/input';
import PasswordInput from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSignIn } from '@/libs/hooks/auth';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { PrivateRoute, PublicRoute } from '@/routes';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginValidator),
  });

  const router = useRouter();

  const { mutateAsync, isPending } = useSignIn({
    onSuccess: () => {
      router.push(PrivateRoute.AUCTIONS);
    },
  });

  const onSubmit = async (data: LoginData) => {
    toast.promise(mutateAsync(data), {
      loading: 'Logging in...',
      success: 'Logged in successfully!',
      error: 'Invalid credentials!',
    });
  };

  return (
    <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('email')}
        placeholder={'john.doe@mail.com'}
        id={'email'}
        label={'E-mail'}
        error={errors.email?.message}
      />

      <PasswordInput
        {...register('password')}
        id={'password'}
        label={'Password'}
        placeholder={'********'}
        error={errors.password?.message}
      />

      <Link
        href={PublicRoute.FORGOT_PASSWORD}
        className={'ml-auto text-xs font-light text-tertiary'}
      >
        Forgot password?
      </Link>

      <Button className={'mt-4'} disabled={isPending}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
