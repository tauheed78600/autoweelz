import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bike1 from '/public/bike1.jpg';
import bike2 from '/public/bike2.jpg';
import bike3 from '/public/bike3.jpg';

const slides = [
  {
    image: bike1,
    heading: 'WELCOME TO',
    highlight: 'BIKE-TRADER',
    tagline: 'Sell Your Used Bike From Home in Minutes!',
  },
  {
    image: bike2,
    heading: 'FAST & EASY',
    highlight: 'SELLING EXPERIENCE',
    tagline: 'Quick Quotes. Instant Offers. Trusted Buyers.',
  },
  {
    image: bike3,
    heading: 'TRUSTED BY',
    highlight: 'THOUSANDS OF SELLERS',
    tagline: 'Join Our Happy Sellers Community!',
  },
];

const BikeCarousel = () => {
  return (
    <div className="w-full h-screen ">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-screen">
<img
  src={slide.image}
  alt={`Slide ${index}`}
  width="1920"
  height="1080"
  loading={index === 0 ? 'eager' : 'lazy'}
  decoding="async"
  className="w-full h-screen object-cover"
/>


            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex items-center justify-start px-6 md:px-20">
              <div className="text-left space-y-4 max-w-lg">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
                  {slide.heading}{' '}
                  <span className="text-blue-400">{slide.highlight}</span>
                </h2>
                <p className="text-lg md:text-2xl font-medium text-white">
                  {slide.tagline}
                </p>
                <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300">
                  Sell Your Bike Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BikeCarousel;
