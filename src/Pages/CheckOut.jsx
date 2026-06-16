import React from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { useFlutterwave } from 'flutterwave-react-v3';
import { useState, useContext } from 'react';
import { AraContext } from '../Context/AraContext';


const Checkout = () => {

  const {navigate, getCartAmountTotal} = useContext(AraContext)

  const [customer,setCustomer] = useState({
    email: '',
    firstname: '',
    lastname: '',
   phonenumber: '',
    country:'',
    city:'',
    state:'',
    street:'',
    zipcode:''


  })
   const handleChange = (e) => {
    setCustomer({
      ...customer,

      [e.target.name]: e.target.value
   })
   }

  const config = {
      public_key:'FLWPUBK_TEST-4f9ce1c785bfd1663e40a4f2ef6b2379-X',
      tx_ref: Date.now(),
      amount: getCartAmountTotal(),
      currency:'NGN',
      payment_options: 'card,ussd,banktransfer',
  
      customer:{
        email: customer.email,
        name: `${customer.firstname} ${customer.lastname}`,
        phonenumber: customer.PhoneNumber,
        country:customer.Country,
        state:customer.State,
        city:customer.City,
        street:customer.Street,
        zipcode:customer.Zipcode
      },
      customization:{
        title:'My Business',
        description:'Payment in USD',
        logo: <h1 className='text-xl font-bold text-purple-600 '> Distinct</h1>
      },
  
  
    };
  
    const handleFlutterPayment = useFlutterwave(config);
    




  return (
    <div className='flex  flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t m-6 '>
      {/* left column content  */}
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
     <div className='text-xl sm:text-2xl my-3'>
      <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
    </div>
    <div className='flex gap-3 '>
    <input type="text" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='First Name' value={customer.firstname} name='firstname' onChange={handleChange}/>
    <input type="text" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='Last Name' value={customer.lastname} name='lastname' onChange={handleChange}/>
    </div>
    <input type="email" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='Email Address' value={customer.email} name='email' onChange={handleChange}/>
    <input type="text" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='Street Address' value={customer.street} name='street' onChange={handleChange}/>
    <div className='flex gap-3 '>
    <input type="text" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='City'value={customer.city}  name='city' onChange={handleChange}/>
    <input type="text" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='State'value={customer.state} name='state' onChange={handleChange}/>
    </div>
   < div className='flex gap-3 '>
    <input type="number" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='Zip Code'  value={customer.zipcode} name='zipcode'onChange={handleChange}/>
    <input type="text" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='Country' value={customer.country} name='country' onChange={handleChange}/>
    </div>  
    <input type="number" className='w-full border  border-gray-300 rounded px-3 py-2' placeholder='Phone Number' value={customer.phonenumber} name='phonenumber' onChange={handleChange} />

    </div>
    {/* right column content */}
    <div className='mt-8'>
    <div className='mt-8 min-w-80'>
     <CartTotal />
    </div>
    <div className='mt-12 font-serif text-center font-semibold'>
     <h2>PAYMENT</h2>
   <div className='flex flex-col gap-3 mt-4 lg:flex-row'>
   <div className='w-full text-end mt-3 '>
    <button onClick={()=>{
      handleFlutterPayment({
      callback:(response)=>{
        console.log(response);
      },
      onClose: () => {
        console.log('Payment closed')
      },
      });
    }}
 className=" border border-[#C8A97E] px-6 md:py-3  tracking-[0.2em] text-xs md:text-sm hover:bg-[#C8A97E] hover:text-black transition duration-300 cursor-pointer">
      Pay with Flutterwave
    </button>
   </div>
   </div>
    </div>
    </div>
   
  
    </div>
  )
}

export default Checkout