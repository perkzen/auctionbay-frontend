import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BellIcon from '@/assets/icons/Notifications-none.svg';
import AddIcon from '@/assets/icons/Add.svg';
import PersonIcon from '@/assets/icons/Person-white.svg';

const NavbarUserActions = () => {
  return (
    <div className={'rounded-4xl flex h-full flex-row gap-2 bg-white p-1'}>
      <Button variant={'tertiary'} className={'rounded-5xl h-[56px]'}>
        <Image src={BellIcon} alt={'Notifications'} width={24} height={24} />
      </Button>
      <Button className={'rounded-5xl h-[56px]'}>
        <Image src={AddIcon} alt={'Add'} width={24} height={24} />
      </Button>
      <Button variant={'secondary'} className={'rounded-5xl h-[56px]'}>
        <Image src={PersonIcon} alt={'Avatar'} width={24} height={24} />
      </Button>
    </div>
  );
};

export default NavbarUserActions;
