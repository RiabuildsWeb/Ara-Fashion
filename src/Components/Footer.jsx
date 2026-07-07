import React from 'react'
import {assets} from '../assets/Ara'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm py-10 px-4 md:px-12 bg-gradient-to-r from-[#1A120D] via-[#24160F] to-[#3A2418] text-white '>
        <div className='flex flex-col gap-1'>
         <img src={assets.Arawhite} alt="ARA Logo" className='w-100 md:w-50  text-white' />
         <p className='w-full md:w-2/3'>Ara is a fashion brand that creates unique,elegant clothing just for you.
         We believe in the power of fashion to empower individuals and express their unique style.</p>
         </div>
         <div>
            <p className=' mb-4 text-xl'>Business</p>
            <ul className='flex flex-col gap-3 '>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
         </div>
         <div className=''>
            <p className='text-white mb-4 text-xl'>Contact</p>
            <ul className='flex flex-col gap-3 '>
                <li>Email: info@ara.com</li>
                <li>Phone: +234 123 456 789</li>
                <li>Address: 123 Fashion Street, Lagos, Nigeria</li>
            </ul>
            </div>
            <div className='col-span-3'>
             <hr className="w-full border-[#4B3428] opacity-40" />

        <p className='text-center text-sm text- white py-4'>© 2026 Ara. All rights reserved.</p>
       </div>
         </div>
       
       
    </div>
  )
}

export default Footer