import React from 'react'
import SearchBar from './SearchBar'
import { BiSearch } from 'react-icons/bi'

function MobileHeader() {
  return (
    <div className=' py-2 sticky top-0 flex md:hidden z-[100] justify-center bg-white'>
        <SearchBar searchText={<BiSearch/>} />
    </div>
  )
}

export default MobileHeader