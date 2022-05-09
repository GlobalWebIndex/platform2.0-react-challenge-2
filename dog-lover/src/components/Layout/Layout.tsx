import { ReactNode } from 'react';
import { Header } from './';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto p-2">{children}</main>
    </>
  );
};

export default Layout;
