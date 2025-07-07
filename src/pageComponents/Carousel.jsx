import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: 'src/assets/bike1.jpg',
    heading: 'WELCOME TO',
    highlight: 'BIKE-TRADER',
    tagline: 'Sell Your Used Bike From Home in Minutes!',
  },
  {
    image: 'src/assets/bike2.jpg',
    heading: 'FAST & EASY',
    highlight: 'SELLING EXPERIENCE',
    tagline: 'Quick Quotes. Instant Offers. Trusted Buyers.',
  },
  {
    image: 'src/assets/bike3.jpg',
    heading: 'TRUSTED BY',
    highlight: 'THOUSANDS OF SELLERS',
    tagline: 'Join Our Happy Sellers Community!',
  },
];

const BikeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-auto">
            {/* Fullscreen Image */}
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover"
            />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>


            {/* Text Overlay - Left Aligned */}
            <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
              <div className="text-left space-y-4 max-w-lg">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
                  {slide.heading} <span className="text-blue-500 w-40">{slide.highlight}</span>
                </h2>
                <p className="text-lg md:text-2xl font-medium text-white">{slide.tagline}</p>
                <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300">
                  Sell Your Bike Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BikeCarousel;
