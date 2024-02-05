'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SignUpData,
  SignUpValidator,
} from '@/libs/validators/signup-validator';
import PasswordInput from '@/components/ui/password-input';
import { useSignup } from '@/api/auth';
import { toast } from 'sonner';

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
        <div className={'flex flex-col gap-2'}>
          <label className={'font-light'} htmlFor={'firstname'}>
            Name
          </label>
          <Input
            {...register('firstname')}
            placeholder={'Joe'}
            id={'firstname'}
            error={errors.firstname?.message}
          />
        </div>
        <div className={'flex flex-col gap-2'}>
          <label className={'font-light'} htmlFor={'firstname'}>
            Surname
          </label>
          <Input
            {...register('lastname')}
            placeholder={'Doe'}
            id={'lastname'}
            error={errors.lastname?.message}
          />
        </div>
      </div>
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
      <div className={'flex flex-col gap-2'}>
        <label className={'font-light'} htmlFor={'repeatPassword'}>
          Repeat password
        </label>
        <PasswordInput
          {...register('repeatPassword')}
          id={'repeatPassword'}
          placeholder={'********'}
          error={errors.repeatPassword?.message}
        />
      </div>
      <Button className={'mt-4'}>Sign up</Button>
    </form>
  );
};

export default SignupForm;
