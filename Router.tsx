import { createBrowserRouter } from 'react-router-dom';
import Layout from './src/components/Layout';
import Error from './src/components/Error';
import Home from './src/components/Home';
import Contact from './src/components/Contact';
import Weather from './src/components/Weather';
import GoodJob from './src/components/GoodJob';
import AboutPage from './src/components/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
      {
        path: '/goodjob',
        element: <GoodJob />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);
