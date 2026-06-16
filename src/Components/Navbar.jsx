// Navbar.jsx

import { useContext, useState } from "react";
import { Menu, X, ShoppingBag, SearchIcon } from "lucide-react";
import {assets} from "../assets/Ara";
import {NavLink, Link} from "react-router-dom";
import { AraContext } from "../Context/AraContext";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setShowSearch, getCartCount } = useContext(AraContext);

  return (
    <div className="w-full h-15 bg-white flex items-center justify-between px-4 shadow-md fixed top-0 left-0 z-50 py-4 font-medium">
   <Link to='/'><img src={assets.Aralogo} alt="ARA Logo" className="w-36 md:w-32" /></Link>
   <ul className="hidden sm:flex gap-5 text-sm text-gray-700 md:flex ">
   <NavLink to='/' className="hover:text-brown-900 transition-colors duration-300" >
   <p>Home</p>
   <hr className="w-4/4 border-none h-[1.5px] bg-gray-500 hidden" />
   </NavLink>
   <NavLink to='/collection' className="hover:text-brown transition-colors duration-300" >
   <p>Collection</p>
   <hr className="w-4/4 border-none h-[1.5px] bg-gray-600 hidden" />
   </NavLink>
   <NavLink to='/contact' className="hover:text-brown transition-colors duration-300" >
   <p>Contact</p>
   <hr className="w-4/4 border-none h-[1.5px] bg-gray-600 hidden" />
   </NavLink>
   <NavLink to='/about' className="hover:text-brown transition-colors duration-300" >
   <p>About</p>
   <hr className="w-4/4 border-none h-[1.5px] bg-gray-600 hidden" />
   </NavLink>
   <NavLink to='/login' className="hover:text-brown transition-colors duration-300 " >
   <p>Login</p>
   <hr className="w-4/4 border-none h-[1.5px] bg-gray-600 hidden" />
   </NavLink>


    </ul>
    <div className="flex items-center gap-4">
      <img onClick={()=>setShowSearch(true)} src={assets.searchicon}  className="w-5 h-5 cursor-pointer" alt="" />
      <Link to='/cart' className="relative">
        <ShoppingBag className="w-5 h-5 gap-4" />
      <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[15px]">{getCartCount()}</p>
      </Link>
      <img onClick={()=>setIsMenuOpen(true)} src={assets.menu_icon} className=" w-5 cursor-pointer sm:hidden text-brown" alt="" />
    </div>
    {/* side menu */}
    <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${isMenuOpen ? 'w-full'  : 'w-0'}`}>
      <div className="flex flex-col text-brown-900 gap-5 p-4">
      <div className="flex flex-col text-gray-600 ">
        <div onClick={()=>setIsMenuOpen(false)} className="flex items-center gap-4 p-3 cursor-pointer">
          <X className="w-5 h-5 cursor-pointer" />
         </div>
        <NavLink onClick={()=>setIsMenuOpen(false)} to='/' className="hover:text-brown-900 transition-colors duration-300 py-2 pl-4 border-b border-gray-200" >
        <p>Home</p>
        </NavLink>
        <NavLink onClick={()=>setIsMenuOpen(false)} to='/collection' className="hover:text-brown-900 transition-colors duration-300 py-2 pl-4 border-b border-gray-200" >
        <p>Collection</p>
        </NavLink>
        <NavLink onClick={()=>setIsMenuOpen(false)} to='/contact' className="hover:text-brown-900 transition-colors duration-300 py-2 pl-4 border-b border-gray-200" >
        <p>Contact</p>
        </NavLink>
        <NavLink onClick={()=>setIsMenuOpen(false)} to='/about' className="hover:text-brown-900 transition-colors duration-300 py-2 pl-4 border-b border-gray-200  " >
        <p>About</p>
        </NavLink>
        <NavLink onClick={()=>setIsMenuOpen(false)} to='/login' className="hover:text-brown-900 transition-colors duration-300 py-2 pl-4 border-b border-gray-200" >
        <p>Login</p>
        </NavLink>

      </div>
      </div>
    </div>
      

    </div>
  )
}

export default Navbar