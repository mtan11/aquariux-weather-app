import { ReactNode } from 'react';
import { Header } from '@aquariux/components';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
