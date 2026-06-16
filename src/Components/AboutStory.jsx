import React from 'react'
import { assets } from '../assets/Ara'

const AboutStory = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT CONTENT */}
      <div >
        <span className="text-xl tracking-[0.2em] uppercase text-amber-700 ">
          Our Story
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-serif leading-tight text-neutral-900">
          A Legacy Woven
          <br />
          Through Generations.
        </h2>

        <div className="w-16 h-px bg-amber-700 mt-8 mb-8" />

        <div className="space-y-6 text-neutral-600 leading-8 text-lg">
          <p>
            Born from a deep love for African textiles and tradition,
            ARA was founded by Orole Gloria in the year 2019 to bridge the gap between heritage and
            modern luxury.
          </p>

          <p>
            Each piece is a tribute to the artistry of our ancestors
            and a vision for the future.
          </p>

          <p>
            We believe in African fashion, ethical production, and
            empowering the talents behind the craft.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12">
          <h3 className="font-signature text-2xl text-neutral-900">
            Ara
          </h3>

          <p className="mt-2 text-sm tracking-[0.2em] uppercase text-neutral-700">
            Founder
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div>
        <img
          src={assets.AraStory}
          alt=''
          className="w-full h-[480px]  object-cover"
        />
      </div>

    </div>
  </div>
</section>
    
  )
}
export default AboutStory
