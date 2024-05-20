import React from 'react';
import ForgotPasswordForm from '@/components/composites/forgot-password/forgot-password-form';

const ForgotPasswordPage = () => {
  return (
    <div className={'m-auto w-full'}>
      <div className={'mb-8 flex flex-col gap-2 text-center'}>
        <h1 className={'text-3.5xl font-bold'}>Forgot password?</h1>
        <p className={'font-light'}>No worries, we will send you reset instructions</p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
