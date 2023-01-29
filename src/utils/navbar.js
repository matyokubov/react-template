import React from 'react';
import Loader from '../components/Loader';
const Home = React.lazy(() => import('../pages/Home'))
const News = React.lazy(() => import('../pages/News'))
const Article = React.lazy(() => import('../pages/Article'))

// Logo
// import logo from "../assets/logo.png";
// export const LogoImg = logo;

export const navbar = [
  {
    id: 1,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <Home/>
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <News/>
      </React.Suspense>
    ),
    title: 'News',
    path: '/news',
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <Article/>
      </React.Suspense>
    ),
    title: 'Article',
    path: '/news/:id',
    private: false,
    hidden: true,
  }
];