'use client';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import UserAvatar from '@/components/composites/navbar/user-avatar';
import ProfileSettingsButton from '@/components/composites/navbar/profile-settings/profile-settings-button';

const SignOutPopover = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'secondary'} size={'fit'} className={'rounded-5xl'}>
          <UserAvatar />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={'max-w-[204px]'}>
        <div className="flex flex-col items-center gap-4">
          <ProfileSettingsButton />
          <Button variant={'inverse'} className={'w-full'} onClick={handleSignOut}>
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SignOutPopover;
