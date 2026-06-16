import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AraContext } from '../Context/AraContext'
import { assets } from '../assets/Ara'

const Product = () => {

  const { productId } = useParams();
  const {OurCollection, currency, addToCart} = useContext(AraContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [sizes,setSizes] = useState('')

  const fetchProductData =  async () => {
   OurCollection.map((item)=>{
    if (item.id === productId){
      setProductData(item)
      setImage(item.image[0])
      return null;
    }
   })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId, OurCollection])


  return productData ? (
    <div className='border-t-2 pt-13 transition-opacity ease-in duration-500 opacity-100 '>
      {/* product data */}
      <div className='flex gap-12 overflow-hidden sm:gap-12 flex-col sm:flex-row '>
     {/* product image */}
       <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center' >
     <div className='flex sm:flex-col overflow-x-hidden justify-between' >
     {
      productData.image.map((item,index)=>(
       <img  src={item} key={index} className='w-[60%] sm:w-full md:w-full sm:mb-3 flex-shrink-0 cursor pointer mt-5 mx-4'  alt="" />  
      ))
     }
     </div>
       </div>
       {/* Product info */}
       <div className='flex-1 px-5'>
        <h1 className='font-medium text-size mt-8'>{productData.name}</h1>
        <div className='flex items-center  gap-1 mt-5'>
        <img src={assets.staricon} alt="" className="w-3 5" />
        <img src={assets.staricon} alt="" className="w-3 5" />
        <img src={assets.staricon} alt="" className="w-3 5" />
        <img src={assets.staricon} alt="" className="w-3 5" />
        <img src={assets.stardullicon} alt="" className="w-3 5" />
        <p className='pl-2 '>(122)</p>
        </div>
       <p className='mt-5 text-xl font-medium'>{currency}{productData.price}</p>
       <p className='mt-5 text-gray-900 md:w-4/5'>{productData.description}</p>
       <div className='flex flex-col gap-4 my-8'>
       <p>Select Size</p>
       <div className='flex gap-2'>
        {productData.sizes.map((item,index)=>(
        <button onClick={()=>setSizes(item)} className={` bg-[#3a2418] py-2 px-4  cursor-pointer text-white  ${item === sizes ? 'bg-gray-800' :''}`} key={index}>{item}</button>
        ))}
       </div>
       </div>
       <button onClick={()=>addToCart(productData.id,sizes)} className='bg-[#3a2418] text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
       <hr className='mt-8 sm:w-4/5 opacity-30' />
       <div className='text-sm text-gray-900 mt-5 flex flex-col gap-1'>
        <p>100% African</p>
        <p></p>
        <p>Easy return and exchange policy within 7 days</p>
       </div>
       </div>
      </div>
      {/* Description & Review Section */}
      <div className='mt-20'>
     <div className='flex gap-4 mx-9 '>
      <b className='border px-5 py-3 text-sm '>Description</b>
      <p className='border px-5 text-sm py-3'>Reviews(122)</p>
     </div>
     <div className='flex flex-col gap-4 bg-gray-100 p-8 text-sm text-gray-900 mt-13 mx-4 my-4'>
     <p>ARA is a celebration of African heritage and contemporary fashion creating timeless pieces that speak identity,elegance and confidence.</p>
     <p>Rooted in culture and putting the African fashion on a global map,we are dedicated to our craft and putting a smile on the faces of our clients,Our website help you navigate our series of collection from Ankara to Aso Oke designs</p>
     </div>
      </div>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product


