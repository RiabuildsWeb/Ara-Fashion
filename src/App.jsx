import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import  Checkout from './Pages/CheckOut'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact' 
import Buttons from './Components/Buttons'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


const App = () => {
  return (
    <div className="font-sans">
      <ToastContainer />
      <Navbar />
      <SearchBar/>
    
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        
       
      </Routes>
      <Footer />
    </div>
  )
}

export default App
