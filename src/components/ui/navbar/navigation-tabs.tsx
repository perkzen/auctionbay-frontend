'use client';
import React, { useEffect, useState } from 'react';
import LinkTab from '@/components/ui/link-tab';
import Image from 'next/image';
import { PrivateRoute } from '@/routes';
import { usePathname } from 'next/navigation';
import HomeSvg from '@/assets/icons/Home.svg';
import PersonSvg from '@/assets/icons/Person.svg';
import HomeWhiteSvg from '@/assets/icons/Home-white.svg';
import PersonWhiteSvg from '@/assets/icons/Person-white.svg';

const NavigationTabs = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(pathname);

  const isAuctions = active === PrivateRoute.AUCTIONS;
  const isProfile = active === PrivateRoute.PROFILE;

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div
      className={
        'flex h-full items-center justify-center rounded-4xl bg-white p-1 text-primary'
      }
    >
      <LinkTab href={PrivateRoute.AUCTIONS} isActive={isAuctions}>
        <Image
          src={isAuctions ? HomeWhiteSvg : HomeSvg}
          alt={'Auctions'}
          className={'mr-1'}
          width={24}
          height={24}
        />
        <span className={'hidden sm:block'}>Auctions</span>
      </LinkTab>
      <LinkTab href={PrivateRoute.PROFILE} isActive={isProfile}>
        <Image
          src={isProfile ? PersonWhiteSvg : PersonSvg}
          alt={'Profile'}
          className={'mr-1'}
          width={24}
          height={24}
        />
        <span className={'hidden sm:block'}>Profile</span>
      </LinkTab>
    </div>
  );
};

export default NavigationTabs;
