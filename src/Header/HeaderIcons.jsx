import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";  
import { Link } from 'react-router-dom';

function HeaderIcons() {
  return (
    <div className=' flex gap-2 md:gap-4'>
      <span>
        <FaRegHeart className=' text-[20px] text-iconColor'/>
      </span>
      <span text-red-400>
        <MdOutlineShoppingCart className=' text-iconColor text-[20px]'/>
      </span>
      <span>
        <Link className=' font-semibold hidden md:block'>Sign In</Link>
        <Link className=' md:hidden'><FaRegUser className=' text-iconColor text-[20px]'/></Link>
      </span>
    </div>
  )
}

export default HeaderIcons