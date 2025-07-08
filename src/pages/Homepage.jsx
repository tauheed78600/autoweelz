import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BikeCarousel from '../pageComponents/Carousel.jsx'
import Page2 from '../pages/Page2.jsx'

function Homepage() {
  return (
    <div className=''>
      <BikeCarousel />
      <Page2/>
    </div>
  )
}

export default Homepage
