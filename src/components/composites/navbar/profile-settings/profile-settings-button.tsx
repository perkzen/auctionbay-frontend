'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import SettingsIcon from '@/assets/icons/Settings.svg';
import { Button } from '@/components/ui/button';
import { SettingsViewProvider } from '@/components/providers/settings-view-provider';
import ProfileSettings from '@/components/composites/navbar/profile-settings/profile-settings';

const ProfileSettingsButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className={'inline-flex gap-2 font-normal'}>
          <Image src={SettingsIcon} alt={'Settings'} width={16} height={16} />
          <span>Profile settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className={'max-w-[328px] sm:max-w-[533px]'}>
        <SettingsViewProvider>
          <ProfileSettings />
        </SettingsViewProvider>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettingsButton;
