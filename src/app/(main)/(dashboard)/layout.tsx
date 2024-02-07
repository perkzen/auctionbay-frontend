import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={'mx-8 mt-4'}>{children}</main>;
};

export default Layout;
