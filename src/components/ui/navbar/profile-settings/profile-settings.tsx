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
import { useGetUser } from '@/hooks/user';

const ProfileSettings = () => {
  const { data } = useGetUser();

  const { register, reset } = useForm<ProfileSettingsData>({
    resolver: zodResolver(ProfileSettingsValidator),
  });

  useEffect(() => {
    reset({
      firstname: data?.firstname,
      email: data?.email,
      lastname: data?.lastname,
    });
  }, [data, reset]);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Profile Settings</DialogTitle>
      </DialogHeader>
      <form className={'flex flex-col gap-4'}>
        <div className={'flex gap-4'}>
          <Input {...register('firstname')} id={'firstname'} label={'Name'} />
          <Input {...register('lastname')} id={'lastname'} label={'Surname'} />
        </div>
        <Input {...register('email')} id={'email'} label={'E-mail'} />
        <div>Change password</div>
        <div>Change profile picture</div>
      </form>
      <DialogFooter className={'mt-4'}>
        <DialogClose asChild>
          <Button variant={'tertiary'}>Cancel</Button>
        </DialogClose>
        <Button>Save changes</Button>
      </DialogFooter>
    </>
  );
};

export default ProfileSettings;
