'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpData, SignUpValidator } from '@/libs/validators/signup-validator';
import PasswordInput from '@/components/ui/password-input';
import { toast } from 'sonner';
import { useSignup } from '@/libs/hooks/auth';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpValidator),
  });

  const { mutateAsync } = useSignup();

  const onSubmit = (data: SignUpData) => {
    toast.promise(
      async () => {
        await mutateAsync(data);
      },
      {
        position: 'top-center',
        loading: 'Creating account...',
        success: 'Account created!',
        error: 'Failed to create account. Please try again.',
      }
    );
  };

  return (
    <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex flex-row gap-4'}>
        <Input
          {...register('firstname')}
          placeholder={'Joe'}
          id={'firstname'}
          label={'Name'}
          error={errors.firstname?.message}
        />

        <Input
          {...register('lastname')}
          placeholder={'Doe'}
          id={'lastname'}
          label={'Surname'}
          error={errors.lastname?.message}
        />
      </div>

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
        placeholder={'********'}
        label={'Password'}
        error={errors.password?.message}
      />

      <PasswordInput
        {...register('repeatPassword')}
        id={'repeatPassword'}
        placeholder={'********'}
        label={'Repeat password'}
        error={errors.repeatPassword?.message}
      />

      <Button className={'mt-4'}>Sign up</Button>
    </form>
  );
};

export default SignupForm;
