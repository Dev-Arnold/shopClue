import React from 'react'
import Logo from '../Images/shopLogo.svg'
import SearchBar from './SearchBar'
import HeaderIcons from './HeaderIcons'

function Header1() {
  return (
    <div className=' h-[60px] flex justify-between px-4 sm:px-0  sm:justify-around items-center'>
      <section>
        <img src={Logo} className=' w-[150px]'/>
      </section>
      <section className=' hidden sm:block'>
        <SearchBar/>
      </section>
      <section>
        <HeaderIcons/>
      </section>
    </div>
  )
}

export default Header1