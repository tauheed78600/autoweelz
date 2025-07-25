import React from "react";
import { motion } from "framer-motion";
import {
  Bolt,
  DollarSign,
  Clock,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Fast & Easy Process",
    desc: "From listing to sale in under 7 days. We handle all the paperwork and logistics.",
    icon: <Bolt />,
    bg: "from-blue-400 to-blue-600",
    stat: "7 Days",
    tagline: "Guaranteed Sale",
    cta: "Start Selling",
  },
  {
    title: "Best Price Guaranteed",
    desc: "We help you get more than market average with our competitive pricing model.",
    icon: <DollarSign />,
    bg: "from-yellow-400 to-yellow-600",
    stat: "+20%",
    tagline: "Above Market Value",
    cta: "Get Your Valuation",
  },
  {
    title: "Instant Valuation",
    desc: "Know your bike’s worth in seconds with our AI-powered valuation tool.",
    icon: <Clock />,
    bg: "from-green-400 to-green-600",
    stat: "10 Sec",
    tagline: "Quick & Accurate",
    cta: "Check Now",
  },
  {
    title: "Secure & Safe",
    desc: "Verified buyers and secure transactions ensure your peace of mind.",
    icon: <ShieldCheck />,
    bg: "from-red-400 to-red-600",
    stat: "100%",
    tagline: "Safe Transactions",
    cta: "Learn More",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Page2() {
  return (
    <div className="w-full py-16 px-4 md:px-12 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800">
        Why Choose Us?
      </h2>
      <p className="text-center text-blue-600 mt-4 mb-10">
        Discover the benefits of selling your bike with us.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 rounded-3xl bg-white/20 border border-gray-300 hover:border-blue-900 shadow-sm backdrop-blur-md transition hover:shadow-2xl hover:scale-[1.02] duration-300"
          >
            <div
              className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.bg} text-white shadow-md`}
            >
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-2">
              {feature.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {feature.desc}
            </p>

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-blue-900">
                {feature.stat}
              </span>
              <span className="text-sm text-gray-600">{feature.tagline}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Page2;