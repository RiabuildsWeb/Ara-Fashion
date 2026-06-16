import React from 'react'
import Title from './Title'
import { useContext } from 'react'
import { AraContext } from '../Context/AraContext'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmountTotal } = useContext(AraContext);  


  return (
    <div className='w-full '>
    <div className='text-2xl'>
     <Title text1={"CART"} text2={"TOTAL"}/>
    </div>
     <div className=' flex flex-col gap-2 mt-2 text-sm'>
    <div className='flex justify-between'>
        <p>Sub total</p>
        <p>{currency} {getCartAmountTotal()}.00</p>
    </div>
    <hr className='border-gray-300'/>
    <div className='flex justify-between'>
        <p>Delivery Fee</p>
        <p>{currency} {delivery_fee}.00</p>
    </div>
   < hr className='border-gray-300'/>
   <div className='flex justify-between'>
    <b>Total</b>
    <b>{currency} {getCartAmountTotal() === 0 ? 0 : getCartAmountTotal() + delivery_fee}.00</b>
   </div>
     </div>
    </div>
  )
}

export default CartTotal