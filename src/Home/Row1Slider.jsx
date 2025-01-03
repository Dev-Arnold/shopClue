import React from 'react'
import fashion from '../Images/fashion.jpg'

function Row1Slider() {
  return (
    <div className=' flex-1 flex-col shadow-md'>
        <div className=' md:h-[85%] h-[70%]'>
            <img src={fashion} className=' h-full rounded-tl-md rounded-tr-md w-full object-cover'/>
        </div>
        <div className=' md:h-[15%] h-[30%] bg-white rounded-bl-md rounded-br-md'>
            <ol className=' flex justify-around h-full items-center'>
                <li>Fashion Sale</li>
                <li>Monster Deal</li>
                <li>Television</li>
                <li>Refub Feature Phones</li>
                <li>Intel</li>
            </ol>
        </div>
    </div>  
  )
}

export default Row1Slider