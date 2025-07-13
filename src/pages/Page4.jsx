import React from 'react';
import aboutUs from '../assets/aboutusImage.png';
import { MoveRight } from 'lucide-react';

function Page4() {
  return (
    <div className='w-full p-10 bg-gradient-to-tl from-blue-100 to blue-200 mt-4'>
      <div className="grid md:grid-cols-[25%_75%] grid-cols-1 gap-8 ">
        <div className='flex justify-center'>
          <img
            className='h-96 w-60'
            src={aboutUs}
            alt="About Us"
          />
        </div>

        <div className='flex flex-col justify-center text-blue-900 font-semibold p-4 '>

          <p className="leading-relaxed text-right sm:text-center md:text-left">
            At BikeTrader, we’re redefining the used bike marketplace by putting you in control. No hidden flaws, no paperwork nightmares—just a hassle-free, fair-value exchange between genuine riders. We personally verify every bike, handle seamless ownership transfers, and connect you with serious buyers or sellers, so you skip the haggling and the headaches. Whether upgrading, downsizing, or just passing on the ride, we ensure smooth transitions and secure deals.
            <br /><br />
            Your bike’s next chapter starts here – simple, safe, and swift. 🚲✨
            <br /><br />
            Why This Works:
            <br />
            ✅ Trust-First – Verified listings, no scams, no surprises.
            <br />
            ✅ Hassle-Free – We manage paperwork, payments & transfer.
            <br />
            ✅ Fair & Fast – Competitive pricing, quick sales.
            <br />
            ✅ For Riders, By Riders – A community built on transparency.
          </p>
          <div className='flex justify-center md:justify-start mt-4'>
            <button className='hover:bg-blue-900 w-96 text-center flex flex-row justify-center gap-2 border transition-all duration-300 ease-in-out hover:text-white rounded-full p-2'>Know More <MoveRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;