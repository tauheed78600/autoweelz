import { DollarSign, Headphones, LetterText, PhoneCall } from 'lucide-react';
import React from 'react';

function OurProcess() {
  const processSteps = [
    {
      text: "Call on the given number or fill out the form on our website.",
      icon: <PhoneCall />,
    },
    {
      text: "Our friendly team will contact you to set up a hassle-free inspection at a time that suits you.",
      icon: <Headphones />,
    },
    {
      text: "We’ll quickly assess your vehicle, review the documents, and give you an instant offer.",
      icon: <LetterText />,
    },
    {
      text: "Best of all, enjoy immediate payment without ever leaving your home in just 30 minutes!",
      icon: <DollarSign />,
    },
  ];

  return (
    <div className="px-4 md:px-12 lg:px-24 mt-12">
      <div className="flex justify-center mb-10">
        <h2 className="text-blue-900 font-extrabold text-3xl sm:text-4xl">
          Our Process
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((process, index) => (
          <div
            key={index}
            className="border relative border-gray-300 hover:border-blue-900 transition-all hover:scale-105 rounded-md shadow-lg duration-300 ease-in-out p-4 h-auto w-full"
          >
            <div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-300 hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out"
            >
              {process.icon}
            </div>

            <p className="text-blue-900 font-semibold text-sm sm:text-base text-center mt-8">
              {process.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProcess;