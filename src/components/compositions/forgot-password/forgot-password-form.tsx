'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ForgotPasswordData,
  ForgotPasswordValidator,
} from '@/libs/validators/forgot-password-validator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PublicRoute } from '@/routes';
import Image from 'next/image';
import ChevronRight from '@/assets/icons/Chevron-right.svg';

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(ForgotPasswordValidator),
  });

  const onSubmit = (_data: ForgotPasswordData) => {};

  return (
    <>
      <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          placeholder={'john.doe@mail.com'}
          id={'email'}
          label={'E-mail'}
          error={errors.email?.message}
        />
        <Button className={'mt-4'}>Reset password</Button>
      </form>

      <Link
        className={'mt-8 flex justify-center text-xs font-light text-tertiary'}
        href={PublicRoute.LOGIN}
      >
        <Image src={ChevronRight} alt={'back to login'} className={'mr-2'} />
        Back to login
      </Link>
    </>
  );
};

export default ForgotPasswordForm;
