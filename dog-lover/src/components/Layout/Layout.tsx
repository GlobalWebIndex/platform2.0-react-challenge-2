import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
      <main className="max-w-screen-xl mx-auto p-2">{children}</main>
  );
};

export default Layout;
