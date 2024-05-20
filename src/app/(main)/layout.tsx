import React, { ReactNode } from 'react';
import Navbar from '@/components/composites/navbar/navbar';

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
