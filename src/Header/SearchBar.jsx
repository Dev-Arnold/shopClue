import React from 'react'
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
  return (
    <div className=' flex relative'>
        <section className=' p-3 absolute'>
          <BiSearch/>
        </section>
        <input type="text" className=' w-[40vw] p-2 rounded-tl-[4px] rounded-bl-[4px] bg-sky-100 focus:outline-none placeholder:text-gray-700 pl-8 text-[0.9rem]' placeholder='What does thou desireth?'/>
        <button className=' w-[100px]  rounded-br-[4px] rounded-tr-[4px] bg-custom-gradient font-bold text-[15px] text-white '>Search</button>
    </div>
  )
}

export default SearchBar;