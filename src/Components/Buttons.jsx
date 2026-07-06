import React from 'react'
import { assets, buttons } from '../assets/Ara'
import {PiSparkle,PiScissors,PiTShirt,PiPackage,} from "react-icons/pi";;


const Buttons = () => {

  const icons = [
    <PiSparkle />,
    <PiScissors />,
    <PiTShirt />,
    <PiPackage />,
  ];

  return (
    <section className="w-full py-10 md:py-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4">

          {buttons.map((button, index) => (

            <div key={button.id} className={`flex flex-col items-center text-center py-6 px-4 transition-all duration-300 hover:-translate-y-1 ${index !== buttons.length - 1? "md:border-r border-[#d8d2cb]" : ""} `}
            >
           <div className="text-4xl text-[#6B4F3A] mb-4">
                {icons[index]}
              </div>
           <h3 className="uppercase tracking-[0.18em] text-sm font-semibold text-[#1D1D1D]">
                {button.title}
              </h3>
            <p className="mt-2 text-sm text-gray-500">
                {button.subtitle}
              </p>
              </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Buttons;