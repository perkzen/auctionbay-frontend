import React, { ReactNode } from 'react';
import Navbar from '@/components/ui/navbar/navbar';

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
