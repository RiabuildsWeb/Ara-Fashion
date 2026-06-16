import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import { AraContext } from '../Context/AraContext'


const OurCollectionItem = ({id,image,name,price}) => {

   const {currency} = useContext(AraContext);

  return (
    <Link to={`/product/${id}`} className='text-brown cursor-pointer'>
    <div className=' overflow-hidden '>
     <img src={image[0]} alt={name} loading='lazy' className='hover:scale-110 transition ease-in-out ' />

    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium '>{currency}{price}</p>
    </Link>
  )
}

export default OurCollectionItem