'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PrivateRoute } from '@/routes';
import Link from 'next/link';
import Image from 'next/image';
import HomeSvg from '@/assets/icons/Home.svg';
import PersonSvg from '@/assets/icons/Person.svg';
import HomeWhiteSvg from '@/assets/icons/Home-white.svg';
import PersonWhiteSvg from '@/assets/icons/Person-white.svg';
import { usePathname } from 'next/navigation';

// TODO: auto select if navigated to
const NavigationTab = () => {
  const pathname = usePathname();

  // Note: This is used to change color of svg when users presses or holds the tab otherwise it won't change the color
  const isAuctions = pathname === PrivateRoute.AUCTIONS;
  const isProfile = pathname === PrivateRoute.PROFILE;

  const [homeIcon, setHomeIcon] = useState(isAuctions ? HomeWhiteSvg : HomeSvg);
  const [personIcon, setPersonIcon] = useState(
    isProfile ? PersonWhiteSvg : PersonSvg
  );

  const handleHomeMouseDown = () => {
    setHomeIcon(HomeWhiteSvg);
    setPersonIcon(PersonSvg);
  };

  const handlePersonMouseDown = () => {
    setHomeIcon(HomeSvg);
    setPersonIcon(PersonWhiteSvg);
  };

  return (
    <Tabs defaultValue={pathname}>
      <TabsList className="flex flex-row gap-2 p-1">
        <Link href={PrivateRoute.AUCTIONS}>
          <TabsTrigger
            value={PrivateRoute.AUCTIONS}
            onMouseDown={handleHomeMouseDown}
          >
            <Image
              src={homeIcon}
              alt={'Auctions'}
              className={'mr-1'}
              width={24}
              height={24}
            />
            <span className={'hidden sm:block'}>Auctions</span>
          </TabsTrigger>
        </Link>
        <Link href={PrivateRoute.PROFILE}>
          <TabsTrigger
            value={PrivateRoute.PROFILE}
            onMouseDown={handlePersonMouseDown}
          >
            <Image
              src={personIcon}
              alt={'Profile'}
              className={'mr-1'}
              width={24}
              height={24}
            />
            <span className={'hidden sm:block'}>Profile</span>
          </TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  );
};

export default NavigationTab;
