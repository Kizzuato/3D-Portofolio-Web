import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { style } from '../styles';
import { NavLink } from '../constant';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [activate, setActivate] = useState("");
  window.scrollTo()

  return (
    <nav 
    className={'${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}
    > 
     <div className='w-full flex justify-between item-center max-w-7xl mx-auto'>
     <Link 
     to="/"
     className="flex items-center gap-2"
     onClick={() => {
      setActivate("");
     }}
      >
      
     </Link>

     </div> 
    </nav>
  )
}

export default Navbar