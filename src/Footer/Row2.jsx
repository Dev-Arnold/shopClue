import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

function Row2() {
  return (
    <div className=' h-[80%] px-7 mt-3 grid grid-cols-4'>
        <div>
            <h1 className=' font-semibold'>ABOUT SHOPCLUE</h1>
            <ol>
                <li>
                    <Link>Contact Us</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Careers</Link>
                </li>
                <li>
                    <Link>Our Blog</Link>
                </li>
                <li>
                    <Link>Forum</Link>
                </li>
                <li>
                    <Link>Terms & Conditions</Link>
                </li>
            </ol>
        </div>
        <div>
            <h1 className=' font-semibold'>ABOUT SHOPCLUE</h1>
            <ol>
                <li>
                    <Link>Contact Us</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Careers</Link>
                </li>
                <li>
                    <Link>Our Blog</Link>
                </li>
                <li>
                    <Link>Forum</Link>
                </li>
                <li>
                    <Link>Terms & Conditions</Link>
                </li>
            </ol>
        </div>
        <div>
            <h1 className=' font-semibold'>ABOUT SHOPCLUE</h1>
            <ol>
                <li>
                    <Link>Contact Us</Link>
                </li>
                <li>
                    <Link>About Us</Link>
                </li>
                <li>
                    <Link>Careers</Link>
                </li>
                <li>
                    <Link>Our Blog</Link>
                </li>
                <li>
                    <Link>Forum</Link>
                </li>
                <li>
                    <Link>Terms & Conditions</Link>
                </li>
            </ol>
        </div>
        <div>
            <h3 className=' font-bold mb-2'>CONNECT WITH US</h3>
            <section className=' flex gap-2'>
                <a href="#"><FaFacebookF className=' bg-[#272626] w-[30px] h-[30px] text-[10px] p-2 rounded-full text-white'/></a>
                <a href="#"> <FaXTwitter className=' bg-[#272626] w-[30px] h-[30px] text-[10px] p-2 rounded-full text-white'/></a>
                <a href="#"><FaInstagram className=' bg-[#272626] w-[30px] h-[30px] text-[10px] p-2 rounded-full text-white'/></a>
                <a href="#"> <FaYoutube className=' bg-[#272626] w-[30px] h-[30px] text-[10px] p-2 rounded-full text-white'/></a>
            </section>
        </div>

    </div>
  )
}

export default Row2