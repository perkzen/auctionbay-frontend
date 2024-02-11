import React, { useEffect } from 'react';
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import {
  ProfileSettingsData,
  ProfileSettingsValidator,
} from '@/libs/validators/profile-settings-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetUser, useUpdateUser } from '@/hooks/user';
import LoadingProvider from '@/components/providers/loading-provider';
import { toast } from 'sonner';

const ProfileSettings = () => {
  const { data, isLoading, refetch: refetchUser } = useGetUser();
  const { mutateAsync, isPending } = useUpdateUser({
    onSuccess: async () => {
      await refetchUser();
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<ProfileSettingsData>({
    resolver: zodResolver(ProfileSettingsValidator),
  });

  useEffect(() => {
    reset({
      firstname: data?.firstname,
      email: data?.email,
      lastname: data?.lastname,
    });
  }, [data, reset]);

  const onSubmit = (data: ProfileSettingsData) => {
    toast.promise(mutateAsync(data), {
      loading: 'Updating profile...',
      success: 'Profile updated!',
      error: 'Failed to update profile',
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Profile Settings</DialogTitle>
      </DialogHeader>
      <LoadingProvider isLoading={isLoading}>
        <form
          className={'flex flex-col gap-4'}
          id={'profile-settings'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={'flex gap-4'}>
            <Input
              {...register('firstname')}
              id={'firstname'}
              label={'Name'}
              disabled={isLoading}
            />
            <Input
              {...register('lastname')}
              id={'lastname'}
              label={'Surname'}
              disabled={isLoading}
            />
          </div>
          <Input
            {...register('email')}
            id={'email'}
            label={'E-mail'}
            disabled={isLoading}
          />
          <div>Change password</div>
          <div>Change profile picture</div>
        </form>
      </LoadingProvider>
      <DialogFooter className={'mt-4'}>
        <DialogClose asChild>
          <Button variant={'tertiary'}>Cancel</Button>
        </DialogClose>
        <Button
          form={'profile-settings'}
          type={'submit'}
          disabled={!isDirty || isPending}
        >
          Save changes
        </Button>
      </DialogFooter>
    </>
  );
};

export default ProfileSettings;
