import React from 'react'
import Row1Slider from './Row1Slider'
import Row1Aside from './Row1Aside'

function Row1() {
  return (
    <div className=' min-h-[30vh] md:min-h-max lg:min-h-[60vh] mt-[60px] md:mt-0 w-[95%] md:w-[90%] flex gap-6'>
        <Row1Slider/>
        <Row1Aside/>
    </div>
    
  )
}

export default Row1