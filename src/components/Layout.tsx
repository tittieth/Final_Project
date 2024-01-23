import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
      {isHomePage ? null : <Navigation />}
    </>
  );
};

export default Layout;
