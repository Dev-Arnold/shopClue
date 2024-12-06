import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { FaWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Row1() {
  return (
    <div className=' grid sm:grid-cols-3 lg:grid-cols-5 gap-[10px] py-2 sm:min-h-[25%] lg:min-h-[20%] bg-[#c7d7dc] rounded-tl-[30px] px-7 rounded-tr-[30px]'>
        <div className=' flex items-center gap-2'>
           <MdEmail className=' p-1 rounded-full bg-white text-black text-2xl'/>
           <section className=' text-[0.8rem]'>
            <h3 className=' font-semibold'>EMAIL SUPPORT</h3>
            <a href="mailto:">shopclues@gmail.com</a>
           </section>
        </div>
        <div className=' flex items-center gap-2'>
           <BiPhone className=' p-1 rounded-full bg-white text-black text-2xl'/>
           <section className=' text-[0.8rem]'>
            <h3 className=' font-semibold'>PHONE SUPPORT</h3>
            <a href="tel:+2347016382374">07016382374, 08101337543</a>
           </section>
        </div>
        <div className=' flex items-center gap-2'>
           <FaWhatsapp className=' p-1 rounded-full bg-white text-black text-2xl'/>
           <section className=' text-[0.8rem]'>
            <h3 className=' font-semibold'>WHATSAPP</h3>
            <a href="tel:+2347016382374">07016382374, 08101337543</a>
           </section>
        </div>
        <div className=' flex items-start justify-center flex-col text-[0.8rem]'>
            <h3 className=' font-semibold'>GET LATEST DEALS</h3>
            <p>Our best promotions sent to your inbox.</p>
        </div>
        <div className=' flex items-center '>
            <section className=' flex h-[60%] bg-fuchsia-300'>
                <input type="text" className=' rounded-tl-[4px] rounded-bl-[4px] bg-sky-100 focus:outline-none placeholder:text-gray-700 pl-1 text-[0.9rem]' placeholder='Email Address'/>
                <button className='  rounded-br-[4px] rounded-tr-[4px] bg-custom-gradient  text-[13px] px-2 text-white '>Subscribe</button>
            </section>
            
        </div>
    </div>
  )
}

export default Row1