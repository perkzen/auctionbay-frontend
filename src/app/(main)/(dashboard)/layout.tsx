import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={'mx-8 mt-4 flex h-full flex-1 flex-col'}>{children}</main>
  );
};

export default Layout;
