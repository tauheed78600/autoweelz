import { Star } from 'lucide-react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { FaStar } from 'react-icons/fa'

function Testimonials() {

  const reviews = [
    {
      "name": "Rahul Sharma",
      "location": "Pune",
      "starRating": 5,
      "review": "Absolutely loved the service! The team was professional and helped me sell my bike in no time. Highly recommend!"
    },
    {
      "name": "Priya Patel",
      "location": "Pune",
      "starRating": 4,
      "review": "The process was smooth, but the valuation could have been slightly better. Overall, a great experience!"
    },
    {
      "name": "Amit Kumar",
      "location": "Pune",
      "starRating": 5,
      "review": "Best platform to sell your used bike. Quick, hassle-free, and trustworthy. Thank you!"
    },
  ]

  return (
    <div className=''>
      <div className='flex justify-center mt-10'>
        <h2 className='text-4xl text-blue-900 font-extrabold'>
          Our Testimonials
        </h2>
      </div>
      <div className='flex flex-col md:flex-row justify-center mt-10 gap-8 px-4'>

        <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1'>
          {reviews.map((review, index) => (
            <div className='flex justify-center'>
              <div className='border border-gray-200 p-6 hover:scale-105 transition-all duration-300 ease-in-out rounded-md w-60 hover:border-blue-900 h-60'>
                <p className='text-center text-sm font-bold text-blue-900'>{review.name}</p>
                <p className='text-center text-sm font-bold text-blue-900'>{review.location}</p>
                <div className='flex flex-row justify-center'>
                  {[...Array(5)].map((_, i) => (
                    <FaStar className='h-3 w-3 text-yellow-500' />
                  ))}
                </div>
                <p className='mt-3 text-blue-900 text-sm font-semibold'>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <div className='w-60 p-4 flex justify-center flex-col text-center text-2xl font-extrabold text-blue-900'>
            <p>1000+</p>
            <p>Customers</p>
            <p>Reviews 4.9/5</p>
            <div className='flex flex-row justify-center text-yellow-500'>
              {[...Array(5)].map(() => (<span>
                <FaStar />
              </span>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
