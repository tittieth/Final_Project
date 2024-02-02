import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <></>;
};

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <main>
        <Outlet></Outlet>
      </main>
      {isHomePage ? null : <Navigation />}
    </>
  );
};

export default Layout;
