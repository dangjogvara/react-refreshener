import MainNavigation from './MainNavigation';

import classes from './Layout.module.css';
import { ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

function Layout({ children }: layoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
