import React from "react";
import { assets } from "../assets/Ara";


const CTA = () => {
  return (
    <div>
      <div className="relative h-screen  overflow-hidden max-w-7xl md:h-screen pt-8 rounded mx-auto px-6 ">
        <img
          src={assets.Ourstory}
          alt=""
          className="absolute inset-0 w-full lg:h-full object-cover object-top mt-13 sm:w-full sm:h-full rounded  "
        />
        <div className=" absolute  flex flex-col items-start md:px-18 text-white px-6  lg:px-20 md:pt-0 mt-20 ">
          <h1 className=" text-3xl sm:text-3xl md:text-5xl lg:text-6xl  font-serif leading-tight ">
            Ready to Create <br /> Something Timeless?
          </h1>
          <p className=" text-sm md:text-lg sm:text-base leading-relaxed max-w-[280px] sm:max-w-md  md:max-w-lg  mb-7">
            Book a consultation with our Team of excellent <br />and let's bring your vision to
            life.
          </p>
          <button
            className=" border border-[#C8A97E] px-6 md:py-3  tracking-[0.2em] text-xs md:text-sm hover:bg-[#C8A97E] hover:text-black transition duration-300 cursor-pointer"
          >
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
