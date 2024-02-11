'use client';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import PersonIcon from '@/assets/icons/Person-white.svg';
import { signOut } from 'next-auth/react';
import ProfileSettingsTrigger from '@/components/ui/navbar/profile-settings/profile-settings-trigger';

const SignOutPopover = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          size={'fit'}
          className={'rounded-5xl p-2 sm:p-4'}
        >
          <Image src={PersonIcon} alt={'Avatar'} width={24} height={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={'sm:max-w-[204px]'}>
        <div className="flex flex-col items-center gap-4">
          <ProfileSettingsTrigger />
          <Button
            variant={'outline'}
            className={'w-full'}
            onClick={handleSignOut}
          >
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SignOutPopover;
