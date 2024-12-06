import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import Header3 from './Header3'

function MainHeader() {
  return (
    <>
      <div className=' shadow-md bg-white fixed w-full top-0 z-[1000]'>
        <Header1/>
        <Header2/>
      </div>
      <Header3/>
    </>
    
  )
}

export default MainHeader