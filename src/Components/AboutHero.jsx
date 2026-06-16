import React from 'react'
import { assets } from '../assets/Ara'
 

const AboutHero = () => {
  

  return (
    <section className="relative min-h-[100svh] md:min-h-[140vh] w-full overflow-hidden ">

      {/* Background Image */}
      <img
        src={assets.AboutHero}
        alt=""
        className="absolute inset-0 w-full h-full object-[82%_center] md:object center object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex  items-center h-[85svh] px-6 lg:px-10">

        <div className="max-w-xl w-full">

          <p className="md:text-2xl sm:text-xl mb-5">
            About Ara
          </p>

          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-serif leading-[0.95] mb-5 text-white">
            Rooted  <br />in Culture
          </h1>

          <p className="text-[clamp(1rem,2vw,1.4rem)] leading-[1.8] mb-8">
            ARA is a contemporary African fashion brand that <br />
             celebrates heritage, African craftmanship.
            We create meaningful designs that honour our culture while<br />
            embracing modern luxury.
          </p>
         

        </div>

      </div>
    </section>
  );
};

export default AboutHero  