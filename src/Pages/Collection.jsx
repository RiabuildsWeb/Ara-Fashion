import React, { useContext, useEffect, useState } from 'react'
import { AraContext } from '../Context/AraContext'
import Title from '../Components/Title';
import OurCollectionItem from '../Components/OurCollectionItem';
import { assets } from '../assets/Ara';


const Collection = () => {
const { OurCollection, search, showSearch } = useContext(AraContext);
const [filterourcolletion, setFilterOurCollection] = useState([]);
const [category,setCategory] = useState([]);

const toggleCategory = (e) =>{
  if (category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item => item !== e.target.value))
  }
  else{
    setCategory(prev => [...prev,e.target.value])
  }
  

}

const applyFilter = () => {
  let OurCollectionCopy = OurCollection.slice();

  if(showSearch && search){
    OurCollectionCopy = OurCollectionCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (category.length > 0){
    OurCollectionCopy = OurCollectionCopy.filter(item => category.includes(item.category));
  }

   setFilterOurCollection(OurCollectionCopy)
}


useEffect(()=>{
 applyFilter();
},[category, search,showSearch])







  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60 mt-8'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2 ml-4'>FILTERS</p>
        {/* category filter */}
        <div className='border border-gray-300 pl-5 py-3 mt-6 ml-4 '>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" onChange={toggleCategory} value={'Aso Oke'}/>Aso Oke
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" onChange={toggleCategory} value={'Ankara'}/>Ankara
        </p>
        <p className='flex gap-2'>
          <input className='w-3' type="checkbox" onChange={toggleCategory} value={'Both'}/>Both
        </p>
        </div>
        </div>

      </div>
      {/* right side */}
      <div className=' flex-1 font-serif text-center '>
      <div className=' text-base sm:text-2xl mb-4 mt-4 '>
     <p>ALL COLLECTIONS</p>
     </div>
     {/* Map products */}
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6  mx-6
     '>
     {
     filterourcolletion.map((item,index)=>(
     <OurCollectionItem key={index} name={item.name} id={item.id} price={item.price} image={item.image}/>
     ))
    
     }
     </div>
      </div>

    </div>
  )
}

export default Collection