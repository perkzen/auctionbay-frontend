import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BellIcon from '@/assets/icons/Notifications-none.svg';
import AddIcon from '@/assets/icons/Add.svg';
import PersonIcon from '@/assets/icons/Person-white.svg';

const NavbarUserActions = () => {
  return (
    <div className={'flex h-full flex-row gap-2 rounded-4xl bg-white p-1'}>
      <Button
        size={'fit'}
        variant={'tertiary'}
        className={'rounded-5xl p-2 sm:p-4'}
      >
        <Image src={BellIcon} alt={'Notifications'} width={24} height={24} />
      </Button>
      <Button size={'fit'} className={'rounded-5xl p-2 sm:p-4'}>
        <Image src={AddIcon} alt={'Add'} width={24} height={24} />
      </Button>
      <Button
        variant={'secondary'}
        size={'fit'}
        className={'rounded-5xl p-2 sm:p-4'}
      >
        <Image src={PersonIcon} alt={'Avatar'} width={24} height={24} />
      </Button>
    </div>
  );
};

export default NavbarUserActions;
