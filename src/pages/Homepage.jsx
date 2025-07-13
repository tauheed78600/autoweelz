import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import BikeCarousel from '../pageComponents/Carousel.jsx'
import Page2 from '../pages/Page2.jsx'
import Page3 from './Page3.jsx';
import OutProcess from './OurProcess.jsx';
import AboutUs from './AboutUs.jsx';
import Blogs from './Blogs.jsx';
import Footer from './Footer.jsx';
import Testimonials from './Testimonials.jsx';

const BikeCarousel = React.lazy(() => import('../pageComponents/Carousel.jsx'));

function Homepage() {
  return (
    <div className=''>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BikeCarousel />
      </React.Suspense>
      <Page2/>
      <Page3/>
      <OutProcess/>
      <AboutUs/>
      <Testimonials/>
      <Blogs/>

    </div>
  )
}

export default Homepage
