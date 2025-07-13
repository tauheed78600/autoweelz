import { MoveRight } from 'lucide-react';
import React from 'react';

function Page3() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl w-full">
        
        <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-white/20 border border-white/30 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-blue-900 limelight font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-center lg:text-left">
            Trade Smart
            <br />
            Ride Free
          </h2>
          <hr className="border border-white mb-6 border-[2px]" />

          <div className="text-center lg:text-left space-y-4">
            <p className="text-blue-900 font-bold text-2xl sm:text-3xl">
              Instant Sales for Every Bike Owner
            </p>
            <p className="text-blue-900 font-medium text-base sm:text-lg leading-relaxed">
              Sell your motorcycle or scooter in minutes – fair prices, zero hassle, guaranteed trust. The fastest way to turn your ride into cash.
            </p>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300 flex items-center gap-3">
              Get Started <MoveRight />
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="p-3 border-4 border-white rounded-2xl shadow-2xl bg-white/10 max-w-sm sm:max-w-md md:max-w-lg">
            <img
              src="/biketradeImg.png"
              alt="Bike"
              className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
