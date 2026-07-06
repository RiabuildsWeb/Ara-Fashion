import React from "react";
import { assets } from "../assets/Ara";
import { useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <section className="relative  lg:min-h-[105vh]  lg:h-screen overflow-hidden">

    {/* {Mobile Background } */}
      <img
        src={assets.mobileourstory}
        alt="ARA Consultation"
        className="absolute inset-0 block md:hidden w-full h-full object-cover"
      />

      {/* Desktop Background */}
      <img src={assets.Cta} alt="ARA Consultation" className="absolute inset-0 hidden md:block w-full h-full object-cover object-[82%_center]"/>
      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[85vh] md:min-h-screen">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          <div className="max-w-lg text-white">

            <p className="uppercase tracking-[0.35em] text-xs text-[#C8A97E] mb-4">
              OUR STORY
            </p>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] mb-6">
              ROOTED IN CULTURE
            </h1>

            <p className="text-base md:text-lg leading-8 text-white/90">
               ARA is a contemporary African fashion brand celebrating
                heritage, craftsmanship, and timeless design. Every piece is
                thoughtfully created to honour our culture while embracing
                modern luxury
            </p>

            <button
              onClick={() => navigate("/About")}
              className="mt-8 inline-flex items-center justify-center border border-[#C8A97E] px-8 py-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#C8A97E] hover:text-black"
            >
            Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;