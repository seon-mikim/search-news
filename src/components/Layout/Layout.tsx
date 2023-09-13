import { Header } from '@components/Header';
import { Outlet } from 'react-router';
import classes from '@components/Layout/Layout.module.css';
const Layout = () => {
  return (
    <div className={classes['layout']}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
