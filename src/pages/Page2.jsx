import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Fast & Easy Process",
    desc: "From listing to sale in under 7 days.",
    icon: "⚡",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
  },
  {
    title: "Best Price Guaranteed",
    desc: "We help you get more than market average.",
    icon: "💰",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
  },
  {
    title: "Instant Valuation",
    desc: "Know your bike’s worth in seconds.",
    icon: "⏱️",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
  },
  {
    title: "Secure & Safe",
    desc: "Verified buyers and safe transactions.",
    icon: "🔒",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
  },
  {
    title: "Free Listing",
    desc: "No fees to list your bike.",
    icon: "🆓",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
  },
  {
    title: "Dedicated Support",
    desc: "Personalized assistance every step of the way.",
    icon: "🤝",
    gradient: "from-gray-800 via-gray-700 to-gray-900",
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 90,
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5 },
  }),
};

function Page2() {
  const [[active, direction], setActive] = useState([0, 0]);
  const intervalRef = useRef(null);

  const paginate = (newDirection) => {
    setActive(([prev, _]) => {
      let next = prev + newDirection;
      if (next < 0) next = features.length - 1;
      if (next >= features.length) next = 0;
      return [next, newDirection];
    });
  };

  // Auto-rotate every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset interval on manual navigation
  const handleManualPaginate = (dir) => {
    clearInterval(intervalRef.current);
    paginate(dir);
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 4000);
  };

  // Dot navigation
  const handleDotClick = (idx) => {
    clearInterval(intervalRef.current);
    setActive(([prev]) => [idx, idx > prev ? 1 : -1]);
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden flex flex-col items-center">
      <motion.h1
        className="text-5xl font-extrabold text-blue-300 text-center my-8 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        Why Choose Us?
      </motion.h1>
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full max-w-md h-80 flex items-center justify-center perspective-1000">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`
                absolute w-full h-72 flex flex-col items-center justify-center
                bg-gradient-to-br ${features[active].gradient}
                rounded-2xl shadow-2xl px-8 py-6
                border border-white/10
                backdrop-blur-md
                text-center
                select-none
              `}
              style={{
                boxShadow: "0 8px 32px 0 rgba(20,20,20,0.35)",
              }}
            >
              <motion.div
                className="text-6xl mb-3 drop-shadow-lg"
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1.2, rotate: 0 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
              >
                {features[active].icon}
              </motion.div>
              <h2 className="text-2xl font-bold text-gray-100 mb-2 drop-shadow-sm">
                {features[active].title}
              </h2>
              <motion.p
                className="text-gray-300 text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {features[active].desc}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <button
            className="rounded-full bg-gray-700 hover:bg-blue-700 transition p-3 text-white text-xl shadow-lg"
            onClick={() => handleManualPaginate(-1)}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="rounded-full bg-gray-700 hover:bg-blue-700 transition p-3 text-white text-xl shadow-lg"
            onClick={() => handleManualPaginate(1)}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                idx === active
                  ? "bg-blue-400 scale-125 shadow"
                  : "bg-gray-600 opacity-50"
              }`}
              onClick={() => handleDotClick(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page2;
