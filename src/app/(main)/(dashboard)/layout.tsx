import React, { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={'mx-8 mb-8 flex h-full flex-1 flex-col'}>{children}</main>;
};

export default Layout;
