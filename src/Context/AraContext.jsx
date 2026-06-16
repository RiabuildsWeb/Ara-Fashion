import  { useEffect, useState } from 'react'
import {createContext} from 'react'
import{ OurCollection } from '../assets/Ara'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export const AraContext = createContext()

const AraContextProvider = (props)=>{

    const currency = "NGN";
    const delivery_fee = 500;
    const [search,setSearch] = useState('');
    const [ showSearch,setShowSearch ] = useState(false)
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();


    const addToCart = async (itemId,sizes) => {
        if(!sizes){
      toast.error('Select Product size');
      return;
        }
     
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if (cartData[itemId][sizes]){
                cartData[itemId][sizes] +=1
            }
          else{
            cartData[itemId][sizes] = 1
          }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId][sizes] = 1

        }
        setCartItems(cartData);
    }
    
   const getCartCount = ()=>{
    let count = 0;
    for (const items in cartItems) {
    for( const item in cartItems[items]){
     try{
if (cartItems[items][item]> 0 )
        count += cartItems[items][item];

     }catch(error){
        
     }
    }
  }
    return count;
}

const updateQuantity = async (itemId, sizes, quantity) => {
   let cartData = structuredClone(cartItems);
   cartData[itemId][sizes] = quantity;

   setCartItems(cartData);
}

const getCartAmountTotal = ()=>{
    let totalAmount = 0;
    for(const items in cartItems){
        let iteminfo=OurCollection.find((item)=> item.id === items);
        for(const item in cartItems[items]){
            try{
           if (cartItems[items][item]> 0){
            totalAmount += cartItems[items][item] * iteminfo.price;
           }
            }catch(error){
                
            }
        }
    }
    return totalAmount;
}

    const value ={
        OurCollection,
        currency,
        delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCartCount,updateQuantity,
        getCartAmountTotal,navigate
                         
    }
    return(
        <AraContext.Provider value={value}>
            {props.children}
        </AraContext.Provider>
    )
        
}




export default AraContextProvider