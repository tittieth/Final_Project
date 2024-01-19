import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
      <Navigation></Navigation>
    </>
  );
};

export default Layout;
