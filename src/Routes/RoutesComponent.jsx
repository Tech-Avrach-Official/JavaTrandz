import PageNotFound from '@/Pages/404-PageNotFound/PageNotFound';
import Maintenance from '@/Pages/Maintenance/Maintenance';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from '../Pages/Home/Home'; // Remove this import
// import About from '@/Pages/About/About'; // Remove this import

const Home = lazy(() => import('../Pages/Home/Home'));
const About = lazy(() => import('@/Pages/About/About'));
const Services = lazy(() => import('@/Pages/Services/Services'));
const Blog = lazy(() => import('@/Pages/Blog/Blog'));
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BlogPage from '@/components/Blog-component/Blog-Page/BlogPage';
// import Blog from '@/Pages/Blog/Blog';
// import Services from '@/Pages/Services/Services';
gsap.registerPlugin(ScrollTrigger);


const RoutesComponent = () => {
  return (
    <>
      {/* <Scrollup /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogpage' element={<BlogPage /> } />
          <Route path='/pagenotfound' element={<PageNotFound />} />
          <Route path='/siteundermantainance' element={<Maintenance />} />

        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesComponent;
