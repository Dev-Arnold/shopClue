import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

function HeaderIcons() {
  return (
    <div className=' flex gap-4'>
      <span>
        <FaRegHeart className=' text-[20px] text-iconColor'/>
      </span>
      <span text-red-400>
        <MdOutlineShoppingCart className=' text-iconColor text-[20px]'/>
      </span>
      <span>
        <Link className=' font-semibold'>Sign In</Link>
      </span>
    </div>
  )
}

export default HeaderIcons