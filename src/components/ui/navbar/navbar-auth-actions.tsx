import React from 'react';
import Link from 'next/link';
import { PublicRoute } from '@/routes';
import { Button } from '@/components/ui/button';

const NavbarAuthActions = () => {
  return (
    <div className={'flex flex-row items-center gap-2'}>
      <Link href={PublicRoute.LOGIN}>
        <Button variant={'ghost'} size={'fit'}>
          Log in
        </Button>
      </Link>
      <div>or</div>
      <Link href={PublicRoute.SIGNUP}>
        <Button variant={'secondary'}>Sign up</Button>
      </Link>
    </div>
  );
};

export default NavbarAuthActions;
