import React from 'react'
import { Link } from 'react-router-dom'

function Header3() {
  return (
    <div className=' h-[40px] mt-[100px] bg-white flex items-center justify-center gap-11 '>
        <nav className=' '>
            <ul className=' flex text-[0.8rem] gap-8'>
                <li><Link>Jaw Dropping Deals</Link></li>
                <li><Link>Refurbished Mobile</Link></li>
                <li><Link>Express Shipping</Link></li>
                <li><Link>Men's Clothing</Link></li>
                <li><Link>Women's Fashion</Link></li>
                <li><Link>Footware</Link></li>
                <li><Link>Kitchen & Dining </Link></li>
                <li><Link>Audio & Headphones</Link></li>
                <li><Link>Bags & Luggage</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header3