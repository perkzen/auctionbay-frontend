'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/libs/utils';
import { Button } from '@/components/ui/button';
import PasswordInput from '@/components/ui/password-input';

interface SignupFormProps {
  className?: string;
}

const SignupForm = ({ className }: SignupFormProps) => {
  return (
    <form className={cn('flex flex-col gap-4', className)}>
      <div className={'flex flex-row gap-4'}>
        <div className={'flex flex-col gap-2'}>
          <label className={'font-light'} htmlFor={'firstname'}>
            Name
          </label>
          <Input placeholder={'Joe'} id={'firstname'} />
        </div>
        <div className={'flex flex-col gap-2'}>
          <label className={'font-light'} htmlFor={'firstname'}>
            Surname
          </label>
          <Input placeholder={'Doe'} id={'lastname'} />
        </div>
      </div>
      <div className={'flex flex-col gap-2'}>
        <label className={'font-light'} htmlFor={'email'}>
          E-mail
        </label>
        <Input placeholder={'john.doe@mail.com'} id={'email'} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label className={'font-light'} htmlFor={'password'}>
          Password
        </label>
        <PasswordInput id={'password'} placeholder={'********'} />
      </div>
      <div className={'flex flex-col gap-2'}>
        <label className={'font-light'} htmlFor={'repeatPassword'}>
          Repeat password
        </label>
        <PasswordInput id={'repeatPassword'} placeholder={'********'} />
      </div>
      <Button className={'mt-4'}>Sign up</Button>
    </form>
  );
};

export default SignupForm;
