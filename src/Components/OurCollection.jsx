import React, { useContext, useEffect, useState } from 'react'
import { AraContext } from '../Context/AraContext'
import Title from './Title';
import OurCollectionItem from './OurCollectionItem';


const OurCollection = () => {

  const { OurCollection } = useContext(AraContext);
  const [ourCollection, setOurCollection ]=useState([]);

  useEffect(()=>{
   setOurCollection(OurCollection.slice(0,3))
  },[])

  return (
    <div  className='my-10 '>
      <div className=' py-8 mb-6 px-4  text-brown text-center items-center justify-center  text-base sm:text-2xl font-medium '>
        <p>Our Collections</p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 w-4/5 mx-auto '>
        {ourCollection.map((item,index) => (
          <OurCollectionItem 
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          
          />
        ))}
      </div>

    </div>
  )
}

export default OurCollection