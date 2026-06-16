import React from 'react'
import {assets} from '../assets/Ara'
import { useNavigate } from 'react-router-dom'

const OurStory = () => {
  const navigate = useNavigate();
  return (
    <div>
       <div className="relative h-screen overflow-hidden w-full md:h-screen pt-8  " >
               
            <img src={assets.Ourstory} loading='lazy' alt="" className="absolute inset-0 w-full lg:h-full object-cover object-top mt-13 sm:w-full sm:h-full  "/>
             <div className=" absolute  flex flex-col items-start justify-center md:px-18 text-white px-6  md:px-20 lg:px-20 pt-16 md:pt-0 lg:mt-15 "> 
               <p className="
                     text-sm
                     font-bold
                     md:text-base
                     sm:text-base
                     leading-relaxed
                     max-w-[289px]
                     sm:max-w-md
                     md:max-w-lg
                     mb-4
                   ">
                    OUR STORY
               </p>
               <h1 className=" text-3xl sm:text-3xl md:text-5xl lg:text-6xl  font-serif leading-tight ">
                 Rooted in culture 
               </h1>
                   <p
  className="
    text-[clamp(1rem,2vw,1.4rem)]
    leading-[1.8]
    tracking-wide
    max-w-[32rem]
    mb-8
    text-white
  "
>
  Ara is a celebration of African heritage and contemporary fashion creating timeeless pieces that speak identity,<br />
  and confidence.
</p>
                 <button onClick={() => navigate('/about')} className=" border border-[#C8A97E] px-6 md:py-3  tracking-[0.2em] text-xs md:text-sm hover:bg-[#C8A97E] hover:text-black transition duration-300 cursor-pointer">
                   Learn More
                 </button>
             </div>
             <div>
               
             </div>
            </div> 
    </div>
  )
}

export default OurStory