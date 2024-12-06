import React from 'react'
import refurb from '../Images/refurb.jpg'
import fashionstore from '../Images/fashionstore.jpg'
import cloths from '../Images/cloths.jpg'

function Row1Aside() {
  return (
    <aside className=' hidden md:block w-[20%] bg-emerald-600 rounded-md shadow-md'>
        <div className=' border-b-[1px] border-solid border-gray-200'>
            <img src={refurb} />
        </div>
        <div className=' border-b-[1px] border-solid border-gray-200'>
            <img src={fashionstore} />
        </div>
        <div className=''>
            <img src={cloths} />
        </div>
    </aside>
  )
}

export default Row1Aside