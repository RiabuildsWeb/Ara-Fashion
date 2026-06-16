import React from 'react'

const Newsletter = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center mt-7'>
<p>Subscribe now and be the first to know about new arrivals</p>
<form  onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
<input type="email" className='w-full sm:flex-1 outline-none'placeholder="Enter your email" />
<button type='submit' className='bg-[#1A120D] text-white text-xs px-10 py-4'>SUBSCRIBE</button>
</form>
    </div>
  )
}

export default Newsletter