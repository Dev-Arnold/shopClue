import React from 'react'
import { BiCategory, BiHeart, BiHomeCircle } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'


function MobileFooter() {
  return (
    <div className=' sm:hidden fixed w-full z-[2000] bottom-0 bg-white py-2'>
        <ol className=' flex justify-around'>
            <li className=' flex flex-col items-center'>
                <BiHomeCircle/>
                <span className=' text-[0.8rem]'>Home</span>
            </li>
            <li className=' flex flex-col items-center'>
                <BiCategory/>
                <span className=' text-[0.8rem]'>Category</span>
            </li>
            <li className=' flex flex-col items-center'>
                <FaHandshake/>
                <span className=' text-[0.8rem]'>Deals</span>
            </li>
            <li className=' flex flex-col items-center'>
                <BiHeart/>
                <span className=' text-[0.8rem]'>Wishlist</span>
            </li>
            <li className=' flex flex-col items-center'>
                <FaRegUser/>
                <span className=' text-[0.8rem]'>Account</span>
            </li>
        </ol>
    </div>
  )
}

export default MobileFooter