import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Row4 from './Row4'
import MobileCategory from './MobileCategory'

function Home() {
  return (
    <div className=' bg-layoutColor min-h-[100vh] pt-4 flex flex-col items-center pb-[100px]'>
        <MobileCategory/>
        <Row1/>
        <Row2/>
        <Row3/>
        <Row4/>
    </div>
  )
}

export default Home