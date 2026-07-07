import React from "react";
import { assets } from "../assets/Ara";

const CTA = () => {
  

  return (
    <section className="relative  lg:min-h-[105vh]  lg:h-screen overflow-hidden">

      {/* Mobile Background */}
      <img
        src={assets.mobileourstory}
        alt="ARA Consultation"
        className="absolute inset-0 block md:hidden w-full h-full object-cover"
        fetchPriority="lazy"
        decoding="async"
      />

      {/* Desktop Background */}
      <img src={assets.Cta} alt="ARA Consultation" className="absolute inset-0 hidden md:block w-full h-full object-cover object-[82%_center]"/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[85vh] md:min-h-screen">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          <div className="max-w-lg text-white">

            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] mb-6">
              Ready to Create?
            </h1>

            <p className="text-base md:text-lg leading-8 text-white/90">
              Book a consultation with our team of professionals at ARA and
              let's bring your vision to life.
            </p>

            <button
              
              className="mt-8 inline-flex items-center justify-center border border-[#C8A97E] px-8 py-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#C8A97E] hover:text-black"
            >
              Book Consultation
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;