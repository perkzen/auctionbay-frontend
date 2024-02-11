'use client';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import SettingsIcon from '@/assets/icons/Settings.svg';
import ProfileSettings from '@/components/ui/navbar/profile-settings/profile-settings';
import { Button } from '@/components/ui/button';

const ProfileSettingsTrigger = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className={'inline-flex gap-2 font-normal'}>
          <Image src={SettingsIcon} alt={'Settings'} width={16} height={16} />
          <span>Profile settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className={'sm:max-w-[533px]'}>
        <ProfileSettings />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileSettingsTrigger;
