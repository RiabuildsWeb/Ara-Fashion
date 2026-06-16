import React from 'react'
import { assets, buttons } from '../assets/Ara'

const Buttons = () => {
  

  

  
  return (
    <div  className='grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-8  w-full  md:py-12 md:px-12 '>
     {buttons.map((button)=>(
        <div key={button.id} className='flex items-start gap-4 border-r border-[#d8d2cb] pr-6 '>
            <img src={button.button} loading='lazy' alt={button.title}className=' h-54 lg:h-65  object-cover' /> 
            

 
 

</div>
         
    
    
      ))}

</div>

  )}
  

export default Buttons