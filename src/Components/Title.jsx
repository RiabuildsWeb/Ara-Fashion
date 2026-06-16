import React from 'react'

const Title
 = ({text1,text2}) => {
  return (
    <div className='flex gap-2 items-start mb-3 '>
     <p className='text-brown text-xl font-serif'>{text1} <span className='text-brown text-xl font-serif'>{text2}</span></p>  
     <p className='w-8 sm:w-10 h-[1px] sm:h-[2px] bg-brown '></p>    
    </div>
  )
}

export default Title
