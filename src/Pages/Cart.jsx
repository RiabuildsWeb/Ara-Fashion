import React, { useEffect } from 'react'
import Title from '../Components/Title';
import { AraContext } from '../Context/AraContext';
import { useContext, useState } from 'react';
import CartTotal from '../Components/CartTotal';

const Cart = () => {

  const { cartItems, currency, OurCollection, updateQuantity, navigate } = useContext(AraContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const tempData = [];
    for(const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item]> 0){
        tempData.push({
          id:items,
          size: item,
          quantity: cartItems[items][item],
          data: OurCollection.find((product)=> product.id === items)
        })
      }
    }
    }
    setCartData(tempData);
  }, [cartItems])

  return (
    <div className='border-t-2 pt-13  m-6 '>
   <div className='text-2xl mb-3 text-center font-medium'>
   <Title text1={'YOUR'} text2={'CART'} />
   </div>
   <div className=''>
  {
    cartData.map((item,index)=>{
      const productData = OurCollection.find(product => product.id === item.id);

      return(
        <div key={index} className='py-4 border-t border-b text-gray-800 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
        <div className='flex items-start gap-6'>
        <img src={productData.image[0]} className='w-40 sm:w-45  ' alt="" />
        <div>
      <p className='text-xs sm:text-lg font-medium mb-2'>{productData.name}</p>
      <div>
        <p className='mb-3'>{currency}{productData.price}</p>
        <p className='px-2 sm:px-3 sm:py-1 border-gray-300 text-gray-600 bg-slate-50'> {item.size}  </p>
      </div>
        </div>
        </div>
        <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, parseInt(e.target.value))} type="number" className='border max-w-10 sm:max-w-20 px-1 sm:px-2 sm:py-1'  min={1} defaultValue={item.quantity} />
       <p onClick={()=>updateQuantity(item.id, item.size, 0)} className='w-6 mr-4 sm:w-7 cursor-pointer text-xl bg-gray-200 rounded-full text-center'>X</p>
        </div>
      )
    })

  }
   </div>
   <div className='flex justify-end my-20'>
   <div className='w-full sm:w-[450px] p-4 '>
   <CartTotal />
   <div className='w-full text-end'>
    <button className=" border border-[#C8A97E] px-6 md:py-3  tracking-[0.2em] text-xs md:text-sm hover:bg-[#C8A97E] hover:text-black transition duration-300 cursor-pointer mt-8" onClick={() => navigate('/checkout')}> PROCEED TO CHECKOUT</button>
   </div>
   </div>
   </div>
    </div>
  )
}

export default Cart