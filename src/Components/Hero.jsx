import React from 'react'
import { assets } from '../assets/Ara'
import {useNavigate} from 'react-router-dom' 

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
    className="relative min-h-[100svh] md:min-h-[140vh] w-full overflow-hidden ">

      {/* Background Image */}
      <img
        src={assets.Herobanner}
        loading="lazy"
        alt=""
        className="absolute inset-0 w-full h-full object-[82%_center] md:object center object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex  items-center h-[85svh] px-4 lg:px-10 ">

        <div className="max-w-xl w-full">

          <p className="text-xs sm:text-sm tracking-[0.2em] mb-4">
            WONDER. WOVEN. EVERYDAY
          </p>

          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.95] mb-5 ">
            Heritage <br /> Reimagined
          </h1>

          <p className="text-[clamp(1rem,2vw,1.4rem)] leading-[1.8] mb-8">
            Modern African fashion <br />
            for a new generation.
          </p>

          <button
            onClick={() => navigate('/collection')}
            className="inline-block w-fit border border-[#C8A97E] px-6 py-3 tracking-[0.2em] text-xs md:text-sm hover:bg-[#C8A97E] hover:text-black transition"
          >
            Explore Collection
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero  