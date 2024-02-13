import React from 'react';
import { PublicRoute } from '@/routes';
import LinkButton from '@/components/ui/link-button';

const NavbarAuthActions = () => {
  return (
    <div className={'flex flex-row items-center gap-2'}>
      <LinkButton variant={'ghost'} size={'fit'} href={PublicRoute.LOGIN}>
        Log in
      </LinkButton>
      <div>or</div>
      <LinkButton variant={'secondary'} href={PublicRoute.SIGNUP}>
        Sign up
      </LinkButton>
    </div>
  );
};

export default NavbarAuthActions;
