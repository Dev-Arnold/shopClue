import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'

function Footer() {
  return (
    <div className=' h-[60vh] bg-layoutColor shadow-md flex justify-center'>
        <div className=' w-[95%] mt-4 bg-white rounded-tl-[30px] rounded-tr-[30px]'>
            <Row1/>
            <Row2/>
        </div>
    </div>
  )
}

export default Footer