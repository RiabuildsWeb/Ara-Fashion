import React from 'react'
import {assets,teammembers} from '../assets/Ara'


const OurTeam = () => {

  return (
    <div className='container mx-auto py-20 lg:px-32 w-full overflow-hidden bg-[#F5F0E8]'>
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Our<span className='underline underline-offset-4 decoration-1 under font-light'>Team</span></h1>  
    <p className='text-center text-gray-500 mb-12 max-w-800 mx-auto'>Our Team of skilled professionals </p>  
    <div className='flex flex-wrap justify-center gap-8'>
    {teammembers.map((item,index)=>(
        <div key={index} className='max-w-[320px] py-5 px-5 rounded text-center'>
     <img  className="w-full h-full rounded-[10%] mx-auto mb-4" src={item.image}  />
     <h2 className='text-xl text-gray-700 font-medium '>{item.name}</h2>
     <p className='text-gray-900 '>{item.role} </p>
     <div className='flex justify-center gap-1 text-red-500 mb-4'>    
     </div>
        </div>
    ))}
    </div>
    </div>
  )
  
}

export default OurTeam
