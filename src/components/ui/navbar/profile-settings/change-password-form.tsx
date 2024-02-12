import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ChangePasswordData,
  ChangePasswordValidator,
} from '@/libs/validators/change-password-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PasswordInput from '@/components/ui/password-input';
import { Button } from '@/components/ui/button';
import { useUpdatePassword } from '@/hooks/user';
import { toast } from 'sonner';
import { AxiosError } from 'axios';
import { ApiError } from '@/models/api-error';

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<ChangePasswordData>({
    resolver: zodResolver(ChangePasswordValidator),
  });

  const { mutateAsync, isPending } = useUpdatePassword({
    onSuccess: () => reset(),
  });

  const onSubmit = (data: ChangePasswordData) => {
    toast.promise(
      mutateAsync({
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
      {
        loading: 'Updating password...',
        success: 'Password updated!',
        error: (error: AxiosError<ApiError>) =>
          error.response?.data?.message || 'Failed to update password',
      }
    );
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Change password</DialogTitle>
      </DialogHeader>
      <form
        className={'flex flex-col gap-4'}
        id={'change-password'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <PasswordInput
          label={'Current password'}
          {...register('currentPassword')}
          id={'currentPassword'}
          error={errors.currentPassword?.message}
        />
        <PasswordInput
          label={'New password'}
          {...register('newPassword')}
          id={'newPassword'}
          error={errors.newPassword?.message}
        />
        <PasswordInput
          label={'Repeat new password'}
          {...register('repeatPassword')}
          id={'repeatPassword'}
          error={errors.repeatPassword?.message}
        />
      </form>
      <DialogFooter className={'mt-4'}>
        <DialogClose asChild>
          <Button variant={'tertiary'}>Cancel</Button>
        </DialogClose>
        <Button
          form={'change-password'}
          type={'submit'}
          disabled={!isDirty || isPending}
        >
          Save changes
        </Button>
      </DialogFooter>
    </>
  );
};

export default ChangePasswordForm;
