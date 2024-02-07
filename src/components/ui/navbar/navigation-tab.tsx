'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Route } from '@/routes';
import Link from 'next/link';
import Image from 'next/image';
import HomeSvg from '@/assets/icons/Home.svg';
import PersonSvg from '@/assets/icons/Person.svg';
import HomeWhiteSvg from '@/assets/icons/Home-white.svg';
import PersonWhiteSvg from '@/assets/icons/Person-white.svg';

const NavigationTab = () => {
  // Note: This is used to change color of svg when users presses or holds the tab otherwise it won't change the color
  const [homeIcon, setHomeIcon] = useState(HomeWhiteSvg);
  const [personIcon, setPersonIcon] = useState(PersonSvg);

  const handleHomeMouseDown = () => {
    setHomeIcon(HomeWhiteSvg);
    setPersonIcon(PersonSvg);
  };

  const handlePersonMouseDown = () => {
    setHomeIcon(HomeSvg);
    setPersonIcon(PersonWhiteSvg);
  };

  return (
    <Tabs defaultValue={Route.AUCTIONS}>
      <TabsList className="flex flex-row gap-2 p-1">
        <Link href={Route.AUCTIONS}>
          <TabsTrigger value={Route.AUCTIONS} onMouseDown={handleHomeMouseDown}>
            <Image
              src={homeIcon}
              alt={'Auctions'}
              className={'mr-1'}
              width={24}
              height={24}
            />
            Auctions
          </TabsTrigger>
        </Link>
        <Link href={Route.PROFILE}>
          <TabsTrigger
            value={Route.PROFILE}
            onMouseDown={handlePersonMouseDown}
          >
            <Image
              src={personIcon}
              alt={'Profile'}
              className={'mr-1'}
              width={24}
              height={24}
            />
            Profile
          </TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  );
};

export default NavigationTab;
