import React from 'react'
import { BiCategory, BiHeart, BiHomeCircle } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function MobileFooter() {
  return (
    <div className=' sm:hidden fixed w-full z-[2000] bottom-0 bg-white py-2'>
        <ol className=' flex justify-around'>
            <li className=' flex flex-col items-center'>
                <Link>
                    <BiHomeCircle/>
                    <span className=' text-[0.8rem]'>Home</span>
                </Link>
            </li>
            <li className=' flex flex-col items-center'>
                <Link>
                    <BiCategory/>
                    <span className=' text-[0.8rem]'>Category</span>
                </Link>
            </li>
            <li className=' flex flex-col items-center'>
                <Link>
                    <FaHandshake/>
                    <span className=' text-[0.8rem]'>Deals</span>
                </Link>
            </li>
            <li className=' flex flex-col items-center'>
                <Link>
                    <BiHeart/>
                    <span className=' text-[0.8rem]'>Wishlist</span>
                </Link>
            </li>
            <li className=' flex flex-col items-center'>
                <Link>
                    <FaRegUser/>
                    <span className=' text-[0.8rem]'>Account</span>
                </Link>
            </li>
        </ol>
    </div>
  )
}

export default MobileFooter