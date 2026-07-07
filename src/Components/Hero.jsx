import React from "react";
import { assets } from "../assets/Ara";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100svh] lg:min-h-screen  md:min-h-screen   lg:min-h-screen  xl:min-h-[135svh] overflow-hidden ">
      {/* Responsive Hero Image */}
      <picture className="absolute inset-0 object-[81%_center] ">
        <source media="(min-width: 768px)" srcSet={assets.Herobanner}/>

        <img
          src={assets.mobilehero}
          alt="ARA Fashion Hero"
          className="h-full w-full object-cover object-top"
          fetchPriority="high"
          decoding="async"
          
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/8 md:bg-black/5" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] md:min-h-screen lg:min-h-screen xl:min-h-[130svh] items-start md:items-center justify-center md:justify-start pt-25 sm:pt-24 md:pt-0 ">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <p className="mb-4 text-[11px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-white ">
              Wonder. Woven. Everyday
            </p>

            <h className="font-serif font-medium leading-[0.95] text-white text-5xl sm:text-6xl  md:text-7xl lg:text-8xl mb-6">
              Heritage
              <br />
              Reimagined
            </h>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white mt-3">
              Modern African fashion
              <br />
              for a new generation.
            </p>

            <button onClick={() => navigate("/collection")} className="inline-flex items-center justify-center border border-[#C8A97E] px-8 py-3 text-xs sm:text-sm uppercasetracking-[0.2em] text-white transition-all duration-300 hover:bg-[#C8A97E] hover:text-black mt-4">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
