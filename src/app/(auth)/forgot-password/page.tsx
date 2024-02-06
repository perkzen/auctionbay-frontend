import React from 'react';
import ForgotPasswordForm from '@/components/pages/forgot-password/forgot-password-form';

const ForgotPassword = () => {
  return (
    <div className={'m-auto'}>
      <div className={'mb-16 flex flex-col gap-2 text-center'}>
        <h1 className={'text-3.5xl font-bold'}>Forgot password?</h1>
        <p className={'font-light'}>
          No worries, we will send you reset instructions
        </p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
