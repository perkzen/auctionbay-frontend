import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className={'mx-4 mb-8 flex h-full flex-1 flex-col sm:mx-8'}>{children}</main>
  );
};

export default Layout;
