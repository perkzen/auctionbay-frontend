'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PersonIcon from '@/assets/icons/Person-white.svg';
import SettingsIcon from '@/assets/icons/Settings.svg';
import { signOut } from 'next-auth/react';

const ProfileSettingsTrigger = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'secondary'}
          size={'fit'}
          className={'rounded-5xl p-2 sm:p-4'}
        >
          <Image src={PersonIcon} alt={'Avatar'} width={24} height={24} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[204px]">
        <div className="flex flex-col items-center gap-4">
          <div className={'flex flex-row items-center gap-2'}>
            <Image src={SettingsIcon} alt={'Settings'} width={24} height={24} />
            <span>Profile settings</span>
          </div>
          <Button
            variant={'outline'}
            className={'w-full'}
            onClick={() => signOut()}
          >
            Log out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettingsTrigger;
