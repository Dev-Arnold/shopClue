import React from 'react'
import { BiSearch } from 'react-icons/bi';

function SearchBar({searchText}) {
  return (
    <div className=' flex relative'>
        <section className=' p-3 absolute hidden sm:block'>
          <BiSearch/>
        </section>
        <input type="text" className=' w-[80vw] sm:w-[40vw] p-2 rounded-tl-[4px] rounded-bl-[4px] bg-sky-100 focus:outline-none placeholder:text-gray-700 pl-3 sm:pl-8 text-[0.9rem]' placeholder='What is on your mind today?'/>
        <button className=' w-[50px]  md:w-[100px] rounded-br-[4px] rounded-tr-[4px] bg-custom-gradient font-bold text-2xl grid place-items-center sm:text-[15px] text-white '>{searchText}</button>
    </div>
  )
}

export default SearchBar;